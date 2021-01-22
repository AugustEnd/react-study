const fs = require("fs");
const http = require("http");

const getApiJSON = async () => {
    try {
        const msg = (await new Promise((resolve, reject) => {
            http.get("http://172.20.5.5:6021/v2/api-docs", (val) => {
                resolve(val);
            });
        })) as any;
        msg.setEncoding("utf8");

        let rawData = "";

        msg.on("data", (chunk) => {
            rawData += chunk;
        });

        return await new Promise((resolve, reject) => {
            msg.on("end", () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    fs.writeFile(
                        "./app.json",
                        JSON.stringify(parsedData.definitions, null, 2),
                        (e) => {
                            console.log(e);
                        }
                    );
                    resolve(parsedData.definitions || {});
                } catch (e) {
                    reject({});
                }
            });
        });
    } catch (error) {
        return error;
    }
};

const handleToTs = (interfaceObj) => {
    let str = "";
    for (let interfaceName in interfaceObj) {
        str += toTsStr(interfaceName, interfaceObj[interfaceName]) + "\n";
    }
    fs.writeFile("./swagger-interface.d.ts", str, () => {});
};

const toTsStr = (key, val) => {
    let annoteItems = "";
    let interfaceItems = "";
    for (let propsName in val.properties) {
        let propsVal = val.properties[propsName];
        annoteItems += ` * @param ${propsName}` + "\n";
        interfaceItems += `    ${propsName}:${propsVal.type};` + "\n";
    }

    return `/**
${annoteItems}
 */

export interface ${(key)} {
${interfaceItems}
}
`;
};

getApiJSON().then((e) => {
    handleToTs(e);
});
