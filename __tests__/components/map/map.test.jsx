import store from 'Store';
import { Map } from 'Components';

describe('Map', () => {
    const currentMarkerPayload = {
        index: 1,
        coords: {
            lat: 299,
            lng: 300,
        },
    };
    const markerIndex = 1;
    const markerCoords = [
        {
            index: 2,
            coords: {
                lat: 200,
                lng: 300,
                x: 10,
                y: 10,
            },
        },
    ];
    const TestMapShallow = shallow(
        <Map
            currentMarkerPayload={currentMarkerPayload}
            getMarkerCoords={markerCoords}
            getMarkerIndex={markerIndex}
            store={store}
        />
        );

    it('Rendered', () => {
        expect(TestMapShallow).toMatchSnapshot();
    });
});
