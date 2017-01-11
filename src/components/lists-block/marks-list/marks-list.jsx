import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import CSSModules from 'react-css-modules';

import styles from './marks-list.styl';

@CSSModules(styles)
export default class MarksList extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    return (
      <ul styleName="marks-list">
        <li styleName="marks-list-item">1</li>
      </ul>
    )
  }
}