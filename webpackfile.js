const webpack = require("webpack"),
  path = require("path"),
  BellOnBundlerErrorPlugin = require("bell-on-bundler-error-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";

function checkEnv(condition1 = true, condition2 = false) {
  return NODE_ENV === "development" ? condition1 : condition2;
}

function pathResolve(yourPath) {
  return path.resolve(__dirname, yourPath);
}

module.exports = {
  context: pathResolve("src/"),
  entry: {
    main: "./index"
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
        options: {
          presets: ["es2016", ["es2015", {modules: false}], "react"],
          plugins: [
            "transform-decorators-legacy",
            "transform-class-properties",
            ["react-css-modules", {
              webpackHotModuleReloading: true
            }]
          ]
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "css",
            options: {
              modules: true,
              importLoader: 1,
              localIdentName: "[local]___[hash:base64:10]"
            },
          },
          {
            loader: "postcss",
            options: {
              plugins: () => [
                require("postcss-nested"),
                require("postcss-simple-vars"),
                require("postcss-functions"),
                require("postcss-font-magician"),
                require("postcss-utilities"),
                require("autoprefixer"),
              ],
              sourceMap: () => true,
              vars: () => {
                variables: require("./src/style-resources/variables.css")
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
        loader: "url-loader",// max size 4096 for file, or use file-loader
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
    },
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules", pathResolve("src/style-resources")]
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
      render: "react-dom",
      GoogleMap: "google-map-react",
      CSSModules: "react-css-modules",
    }),
    new CleanWebpackPlugin([pathResolve("build")], {
      exclude: ["index.html", "r-n-s.css"],
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

/*
 add plugins for production
 */

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
