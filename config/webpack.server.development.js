const { commonConfig, pathResolve } = require('./webpack.common');
const webpack = require('webpack');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const devServerConfig = Object.assign({}, commonConfig);
const NODE_ENV = 'development';

devServerConfig.entry = {
    server: './server',
};
devServerConfig.target = 'node';
devServerConfig.name = 'server';
devServerConfig.module.rules[0].include = pathResolve('/');
devServerConfig.module.rules[0].exclude = /node_modules/;
devServerConfig.watch = true;
devServerConfig.watchOptions = {
    aggregateTimeout: 100,
    ignored: /node_modules/,
};
devServerConfig.plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new BellOnBundlerErrorPlugin(),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
    }),
];

module.exports = devServerConfig;
