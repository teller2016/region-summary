import * as vscode from "vscode";

/**
 * 확장 프로그램 실행시 실행됨
 * @param context
 */
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "region-summary" is now active!'
  );

  /**
   * 확장기능 실행시 함수 실행
   * package.json에 id값 정의되어야 됨
   */
  let disposable = vscode.commands.registerCommand(
    "region-summary.helloWorld",
    regionSummary
  );

  context.subscriptions.push(disposable);
}

const regionSummary = () => {
  vscode.window.showInformationMessage("REGION SUMMARY 실행");
};

/**
 * 확장기능 종료시 실행
 */
export function deactivate() {}
