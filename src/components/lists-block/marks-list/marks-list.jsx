import React, { PropTypes } from 'react';

import './styles/marks-list.styl';
import './styles/marks-list-item.styl';

export default function MarksList(props) {
  return (
      <ul className="marks-list list">
        <li className="marks-list-item">1</li>
      </ul>
  )
}

MarksList.PropTypes = {}