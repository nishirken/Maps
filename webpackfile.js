const devConfig = require('./config/webpackfile.development');
const prodConfig = require('./config/webpackfile.production');
const NODE_ENV = process.env.NODE_ENV;
let config = {};
console.log(NODE_ENV);
if (NODE_ENV === 'development')
    config = Object.assign({}, devConfig);
if (NODE_ENV === 'production')
    config = Object.assign({}, prodConfig);
console.log(config.module.rules);
module.exports = config;
