const webpack = require('webpack');
const { commonConfig, pathResolve } = require('./webpack.common');
const prodConfig = Object.assign({}, commonConfig);

prodConfig.module.rules.push({
    test: /\.(jsx|js)$/,
    enforce: 'pre',
    loader: 'eslint',
    include: [
        pathResolve('src'),
    ],
});
prodConfig.plugins.push(
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
            warnings: false,
        },
    })
);

module.exports = prodConfig;
