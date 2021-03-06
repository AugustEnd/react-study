const fs = require("fs");
const http = require("http");
const paths = require("path");
const parser = require("fast-xml-parser");
interface IProps {
    serviceName: string;
    serviceUrl: string;
}

const getApiVersion = async ({ serviceName, serviceUrl }: IProps) => {
    // 获取接口版本
    const msg = (await new Promise((resolve, reject) => {
        http.get(`${serviceUrl}/swagger-resources`, (val: any) => {
            resolve(val);
        });
    })) as any;

    msg.setEncoding("utf8");

    let rawData = "";

    msg.on("data", (chunk: any) => {
        rawData += chunk;
    });

    return await new Promise((resolve, reject) => {
        msg.on("end", () => {
            try {
                resolve(JSON.parse(rawData)[0].location);
            } catch (e) {
                reject(e.message);
            }
        });
    });
};

interface IData extends IProps {
    path: string;
}

const getData = async ({ serviceName, serviceUrl, path }: IData) => {
    const msg = (await new Promise((resolve, reject) => {
        http.get(`${serviceUrl}${path}`, (val: any) => {
            resolve(val);
        });
    })) as any;

    msg.setEncoding("utf8");

    let rawData = "";

    msg.on("data", (chunk: any) => {
        rawData += chunk;
    });

    return await new Promise((resolve, reject) => {
        msg.on("end", () => {
            try {
                resolve({ data: JSON.parse(rawData).definitions, serviceName });
            } catch (e) {
                reject(e.message);
            }
        });
    });
};

export const getSimpleServiceData = async ({
    serviceName,
    serviceUrl,
}: IProps) => {
    try {
        const apiPath = (await getApiVersion({
            serviceName,
            serviceUrl,
        })) as any;
        return await getData({ serviceName, serviceUrl, path: apiPath });
    } catch (error) {}
};

/**
 * 获取所有服务
 * @param param0
 */
export const getAllServiceList = async ({ url }: { url: string }) => {
    const msg = (await new Promise((resolve, reject) => {
        http.get(url, (val: any) => {
            resolve(val);
        });
    })) as any;

    msg.setEncoding("utf8");

    let rawData = "";

    msg.on("data", (chunk: any) => {
        rawData += chunk;
    });

    return await new Promise((resolve, reject) => {
        msg.on("end", () => {
            try {
                resolve({
                    data: parser.parse(rawData).applications.application || [],
                });
            } catch (e) {
                reject(e.message);
            }
        });
    });
};
