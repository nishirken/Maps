const babelRegister = require('babel-register');

global.NODE_ENV = process.env.NODE_ENV;

babelRegister({
    babelrc: false,
    presets: [
        'es2016',
        'es2015',
        'react',
    ],
    plugins: [
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-class-properties',
        'transform-export-extensions',
        'transform-function-bind',
        'transform-async-to-generator',
        ['module-resolver', {
            root: ['./'],
            alias: {
                Containers: './src/containers',
                Actions: './src/actions',
                Api: './src/api',
                Middlewares: './src/middlewares',
                Components: './src/components',
                Constants: './src/constants',
                Reducers: './src/reducers',
                Styles: './src/style-resources',
                Store: './src/create-store',
            },
        }],
    ],
    ignore: [
        /(\.css|\.woff2)$/,
        /node_modules/,
    ],
});
require('babel-polyfill');
require('./src/server.js');
