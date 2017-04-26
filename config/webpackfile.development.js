const webpack = require('webpack');
const { commonConfig } = require('./webpackfile.common');
const devConfig = Object.assign({}, commonConfig);

devConfig.devServer = {
    clientLogLevel: 'warning',
    compress: false,
    publicPath: '/build/',
    port: 8000,
    hot: true,
    stats: 'normal',
    proxy: {
        '/': {
            target: 'http://localhost',
        },
    },
    watchOptions: {
        aggregateTimeout: 100,
        ignored: /node_modules/,
    },
};
devConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        test: /\.(js|jsx)$/,
        options: {
            devTool: 'cheap-module-eval-source-map',
        },
    })
);

module.exports = devConfig;
