const path = require("path");

module.exports = {
  mode: "production",
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
  }
};
