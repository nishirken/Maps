import { Component } from 'react';
import { ListsBlock, MarksList, MarksListItem } from 'Components';

export default class ListsBlockContainer extends Component {
  render() {
    return (
      <ListsBlock>
        <MarksList>
          <MarksListItem />
        </MarksList>
        <MarksList>
          <MarksListItem />
        </MarksList>
      </ListsBlock>
    );
  }
}