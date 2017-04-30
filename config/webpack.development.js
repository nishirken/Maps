const webpack = require('webpack');
const { commonConfig } = require('./webpack.common');
const devConfig = Object.assign({}, commonConfig);
const NODE_ENV = 'development';

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
    }),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
    })
);

module.exports = devConfig;
