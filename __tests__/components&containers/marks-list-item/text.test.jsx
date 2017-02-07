import store from 'Store';
import Text from 'Components/marks-list/marks-list-item/text/text';

describe('Text in a marks list item', () => {
    const TestText = shallow(
        <Text
            markerCoords={{
                lat: 299,
                lng: 300,
            }}
            store={store}
        />
    );

    it('Rendered', () => {
        expect(TestText).toMatchSnapshot();
    });
});
