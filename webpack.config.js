const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
  const mode = env.NODE_ENV;

  return {
    mode: mode,
    entry: "./src/demo/vue/index",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/demo/vue/index.html"
      }),
      new BundleAnalyzerPlugin(),
    ],
    devServer: {
      contentBase: "./dist",
      compress: true,
      port: 8080
    }
  };
};
