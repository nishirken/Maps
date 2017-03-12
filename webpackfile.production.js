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
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint',
                    },
                ],
            },
            {
                test: /\.(jsx|js)$/,
                use: [
                    'babel',
                ],
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {},
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('production'),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            PureComponent: 'react/lib/ReactPureComponent',
            StyleConst: pathResolve('src/style-resources/constants'),
            StyleFunc: pathResolve('src/style-resources/functions'),
        }),
        new BellOnBundlerErrorPlugin(),
    ],
    performance: {
        hints: false,
        maxAssetSize: 300000,
    },
    stats: 'verbose',
};
