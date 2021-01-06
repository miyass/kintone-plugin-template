# React + TypeScript

React,TypeScript環境でkintoneプラグイン開発を始めるためのテンプレートプロジェクトです。


## Quick OverView

1. `kintone-plugin-template`をgit cloneし、`react-typescript`フォルダをコピーしてください

```sh
git clone https://github.com/miyass/kintone-plugin-template.git
cp kintone-plugin-template/react-typescript <コピー先ファイルパス>
```
2. コピーが完了したら、プロジェクトファイルのディレクトリ直下で`npm install`を実行し、npm packageのインストールを行なってください。

以上で準備は完了です！！

## npm scripts

### `npm start`
開発用コマンドです。  
コマンド実行後、ドメイン、ログイン名、パスワードを入力します。  

```sh
npm start

? kintoneのドメインを入力してください (example.cybozu.com): { your domain }.cybozu.com
? ログイン名を入力してください: { username }
? パスワードを入力してください: { password }

```

### `npm run build:plugin`
本番用プラグイン生成用コマンドです。
開発が完了したらこちらのコマンドでプラグインを生成してください。

