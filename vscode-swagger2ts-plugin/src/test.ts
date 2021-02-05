import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
// configuration
export const testCreateFile = () => {
    const rootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath || null;
    console.log(vscode, "target");
    console.log(
        vscode.workspace
            .getConfiguration("swagger-ts-plugin")
            .get("serviceList"),
        "serviceList"
    );
    vscode.window.showWarningMessage(
        `test ${vscode.workspace.getConfiguration("swagger-ts-plugin")}`
    );
    if (rootPath) {
        fs.writeFile(path.resolve(rootPath, `ye.txt`), "sss", (error) => {
            if (!error) {
                console.log("成功", path.resolve(rootPath, `ye.txt`));
            } else {
                console.error(error);
            }
        });
    } else {
        vscode.window.showErrorMessage("必须打开文件夹才能使用");
    }
};
