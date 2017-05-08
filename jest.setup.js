const { shallow, render, mount } = require('enzyme');

global.React = require('react');
global.PureComponent = React.PureComponent;
global.PropTypes = React.PropTypes;
global.StyleConst = require('./src/style-resources/constants');
global.StyleFunc = require('./src/style-resources/functions');
global.NODE_ENV = 'test';
global.nock = require('nock');

global.shallow = shallow;
global.render = render;
global.mount = mount;
