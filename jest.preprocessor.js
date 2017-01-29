const { resolve } = require('path'),
    fs = require('fs'),
    babelJest = require('babel-jest'),
    yaml = require('js-yaml'),
    stripComments = require('strip-json-comments');

const babelConfigString = fs.readFileSync(resolve(__dirname, '.babelrc'), 'utf8');
const babelConfig = yaml.safeLoad(stripComments(babelConfigString));

module.exports = babelJest.createTransformer(babelConfig);
