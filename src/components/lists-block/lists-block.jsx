import React, { Component, PropTypes } from 'react';
import MarksList from './marks-list/marks-list';
import MarkObjectList from './mark-object-list/mark-object-list';

import './lists-block.styl';

export default class ListsBlock extends Component {
  render() {
    return (
        <aside className="lists-block">
          <MarkObjectList/>
          <MarksList/>
        </aside>
    );
  }
}
