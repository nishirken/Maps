import store from 'Store';
import { setCurrentMarker } from 'Actions';
import { ListItem } from 'Components';

describe('Marks list item', () => {
    const TestMarksLIstItemShallow = shallow(
        <ListItem
            setCurrentMarker={setCurrentMarker}
            store={store}
        />
    );

    it('Rendered', () => {
        expect(TestMarksLIstItemShallow).toMatchSnapshot();
    });
});
