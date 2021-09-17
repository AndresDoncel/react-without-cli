const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, argv) => {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index_bundle.js",
    },
    devtool: isDevelopment && "cheap-module-source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
