const webpack = require('webpack'),
    { resolve } = require('path'),
    BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = 'development';

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
                use: [
                    'react-hot',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            minChunks: 2,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                devTool: 'cheap-module-eval-source-map',
            },
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development'),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            PureComponent: 'react/lib/ReactPureComponent',
            PropTypes: 'react/lib/ReactPropTypes',
            StyleConst: pathResolve('src/style-resources/constants'),
            StyleFunc: pathResolve('src/style-resources/functions'),
        }),
        new BellOnBundlerErrorPlugin(),
    ],
    devServer: {
        clientLogLevel: 'warning',
        compress: false,
        contentBase: 'build/',
        publicPath: '/',
        hot: true,
        stats: 'normal',
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
