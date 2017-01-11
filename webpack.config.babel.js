import webpack from 'webpack';
import path from 'path';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV || 'development';

function checkEnv(condition1 = true, condition2 = false) {
  return NODE_ENV === 'development' ? condition1 : condition2;
}

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    path: path.join(__dirname, '/build')
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js$/,
        loader: "babel",
        include: path.join(__dirname + '/src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.styl$/,
        loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:10]!autoprefixer!stylus?sourceMap',
        include: path.join(__dirname + '/src')
      },
      {
        test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
        loader: 'url?limit=4096&name=[path][name].[ext]?[hash]'//max size 4096 for file, or use file-loader
      }
    ],
    noParse: '/\/node_modules\/(react|react-dom|jquery)/'
  },
  cssLoader: {
    discardComments: {removeAll: true}
  },
  stylus: {
    import: [path.join(__dirname, './src/common-styles/index.styl'), path.join(__dirname, '~kouto-swiss')],
    preferPathResolver: 'webpack',
  },
  node: {
    fs: "empty"// kuoto-swiss is falling
  },
  devtool: checkEnv('cheap-module-source-map', null),
  resolve: {
    extensions: ['', '.js', '.jsx', 'json']
  },
  watch: checkEnv(),
  watchOptions: {
    aggregateTimeout: 100
  },
  devServer: {
    contentBase: "./build",
    inline: true,
    hot: true,
    clientLogLevel: "none"
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BellOnBundlerErrorPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: NODE_ENV,
      _DEV_: checkEnv()
    }),
    new webpack.optimize.CommonsChunkPlugin({//for pick out common part of js in 1 file
      name: 'common',
      minChunks: 2
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('build', {//rm -rf before build
      exclude: 'index.html'
    })
  ]
};

/*
 add plugins for production
 */

if (NODE_ENV !== 'development') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          drop_console: true,
          drop_debugger: true,
          warnings: false
        },
        comments: false
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {discardComments: {removeAll: true}}//remove comments from css
      })
  )
}
