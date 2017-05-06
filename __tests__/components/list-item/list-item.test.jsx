import store from 'Store';
import { setCurrentMarker } from 'Actions';
import { ListItem } from 'Components';

describe('Marks list item', () => {
    const TestMarksLIstItem = shallow(
        <ListItem
            setCurrentMarker={setCurrentMarker}
            store={store}
        />
    );

    it('Rendered', () => {
        expect(TestMarksLIstItem).toMatchSnapshot();
    });
});
