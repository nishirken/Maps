const webpack = require('webpack'),
    { resolve } = require('path'),
    BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

function pathResolve(yourPath) {
    return resolve(__dirname, yourPath);
}

module.exports = {
    context: pathResolve('src'),
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
            Middlewares: pathResolve('src/middlewares'),
            Components: pathResolve('src/components'),
            Constants: pathResolve('src/constants'),
            Containers: pathResolve('src/containers'),
            Reducers: pathResolve('src/reducers'),
            Styles: pathResolve('src/style-resources'),
            Store: pathResolve('src/create-store'),
        },
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules'],
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2,
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.(js|jsx)$/,
            options: {
                devTool: 'cheap-module-eval-source-map',
            },
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development'),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new BellOnBundlerErrorPlugin(),
    ],
    devServer: {
        clientLogLevel: 'warning',
        compress: false,
        contentBase: 'build',
        publicPath: '/',
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
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100,
        ignored: /node_modules/,
    },
    stats: 'normal',
};
