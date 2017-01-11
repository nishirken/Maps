import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import CSSModules from 'react-css-modules';

import styles from './mark-object-list.styl';

@CSSModules(styles)
export default class MarkObjectList extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    return (
      <ul styleName="mark-object-list">
        <li styleName="mark-object-list-item">1</li>
      </ul>
    )
  }
}
