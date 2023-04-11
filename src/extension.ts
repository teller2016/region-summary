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
    "region-index",
    regionSummary
  );

  context.subscriptions.push(disposable);

  vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (editor) {
      // Run the command when a file is focused
      vscode.commands.executeCommand("region-index");
    }
  });
}

const regionSummary = () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    // get the text document associated with the active editor
    const document = editor.document;

    // focus된 파일 text get
    const text = document.getText();

    // display the contents in the output window
    console.log(text);
  } else {
    vscode.window.showErrorMessage("No active editor found");
  }
};

/**
 * 확장기능 종료시 실행
 */
export function deactivate() {}
