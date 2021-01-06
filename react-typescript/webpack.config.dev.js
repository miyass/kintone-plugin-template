const path = require("path");
const KintonePlugin = require("@kintone/webpack-plugin-kintone-plugin");

module.exports = {
  mode: "development",
  entry: {
    desktop: "./src/desktop/index.tsx",
    mobile: "./src/mobile/index.tsx",
    config: "./src/config/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: "./manifest.json",
      privateKeyPath: "./dist/private.ppk",
      pluginZipPath: "./dist/plugin.zip",
    }),
  ],
};
