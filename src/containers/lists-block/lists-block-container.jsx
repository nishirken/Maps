import { ListsBlock, MarksList, MarksListItem } from 'Components';

export class ListsBlockContainer extends PureComponent {
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
