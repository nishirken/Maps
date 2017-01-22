import { PropTypes } from 'react';

import MarksList from './marks-list/marks-list';
import MarkObjectList from './mark-object-list/mark-object-list';

export default function ListsBlock(props) {
  return (
    <aside >
      <MarkObjectList/>
      <MarksList/>
    </aside>
  )
}

ListsBlock.propTypes = {};
