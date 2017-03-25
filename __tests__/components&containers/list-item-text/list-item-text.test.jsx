import store from 'Store';
import { ListItemText } from 'Components';

describe('Text in a marks list item', () => {
    const markerName = 'Marker';
    const markerCoords = {
        lat: 299,
        lng: 300,
    };
    const TestText = shallow(
        <ListItemText
            markerCoords={markerCoords}
            markerIndex={1}
            markerName={markerName}
            markerNumber={2}
            store={store}
        />
    );

    it('Rendered', () => {
        expect(TestText).toMatchSnapshot();
    });
});
