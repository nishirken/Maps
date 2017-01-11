import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import MarksList from './marks-list/marks-list';
import MarkObjectList from './mark-object-list/mark-object-list';

import styles from './lists-block.styl';

@CSSModules(styles)
export default class ListsBlock extends Component {
  render() {
    return (
      <aside styleName="lists-block">
        <MarkObjectList/>
        <MarksList/>
      </aside>
    );
  }
}
