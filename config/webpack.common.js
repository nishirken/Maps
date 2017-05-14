const webpack = require('webpack');
const { resolve } = require('path');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

const pathResolve = yourPath => resolve(process.cwd(), yourPath);

const commonConfig = {
    context: pathResolve('src'),
    name: 'client',
    entry: {
        main: './index',
    },
    output: {
        filename: '[name].js',
        path: pathResolve('build'),
        pathinfo: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel',
                include: [
                    pathResolve('src'),
                ],
            },
            {
                test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[path][name].[ext]?[hash]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            Actions: pathResolve('src/actions'),
            Api: pathResolve('src/api'),
            Middlewares: pathResolve('src/middlewares'),
            Components: pathResolve('src/components'),
            Constants: pathResolve('src/constants'),
            Containers: pathResolve('src/containers'),
            Reducers: pathResolve('src/reducers'),
            Styles: pathResolve('src/style-resources'),
            Store: pathResolve('src/store/create-store'),
        },
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules'],
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2,
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new BellOnBundlerErrorPlugin(),
    ],
    stats: 'normal',
};

module.exports = {
    commonConfig,
    pathResolve,
};
