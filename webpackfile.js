"use strict";

const webpack = require("webpack"),
  {resolve} = require("path"),
  BellOnBundlerErrorPlugin = require("bell-on-bundler-error-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";

function checkEnv(condition1 = true, condition2 = false) {
  return NODE_ENV === "development" ? condition1 : condition2;
}

function pathResolve(yourPath) {
  return resolve(__dirname, yourPath);
}

module.exports = {
  context: pathResolve("src/"),
  entry: {
    main: "./index",
  },
  output: {
    filename: "[name].js",
    path: pathResolve("build/"),
    pathinfo: checkEnv(),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: "babel",
        include: [
          pathResolve("src")
        ],
      },
      {
        test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 4096,
          name: "[path][name].[ext]?[hash]"
        }
      }
    ],
  },
  resolve: {
    alias: {
      Actions: pathResolve("src/actions"),
      Components: pathResolve("src/components"),
      Constants: pathResolve("src/constants"),
      Containers: pathResolve("src/containers"),
      Reducers: pathResolve("src/reducers"),
      StyleVars: pathResolve("src/style-resources/variables"),
      StyleFunc: pathResolve("src/style-resources/functions"),
    },
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules"],
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js",
      minChunks: 2
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        devTool: checkEnv("cheap-module-eval-source-map", false),
      },
      stylus: {}
    }),
    new webpack.DefinePlugin([
      "NODE_ENV"
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
    new CleanWebpackPlugin([pathResolve("build")], {
      exclude: ["index.html", "global-styles.css"],
    }),
    new BellOnBundlerErrorPlugin(),
  ],
  devServer: {
    clientLogLevel: "warning",
    compress: false,
    contentBase: "build/",
    publicPath: "/",
    hot: false,
    stats: "minimal",
    watchOptions: {
      aggregateTimeout: 100,
      ignored: /node_modules/,
    },
  },
  watch: checkEnv(),
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },
  performance: {
    hints: checkEnv(false, "error"),
    maxAssetSize: 300000
  },
  stats: "errors-only",
}

if (NODE_ENV === "production") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        properties: true,
        conditionals: true,
        loops: true,
        unused: true,
        collapse_vars: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        warnings: true,
      },
      output: {
        comments: "all",
      }
    })
  )
}
