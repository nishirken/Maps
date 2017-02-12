import store from 'Store';
import { Map } from 'Components';

const markerPayload = {
    coords: {
        lat: 299,
        lng: 300,
    },
    markerIndex: 1,
};

describe('Map', () => {
    const TestMapShallow = shallow(<Map currentMarkerPayload={markerPayload} store={store} />),
        TestMap = mount(<Map currentMarkerPayload={markerPayload} store={store} />);

    it('Rendered', () => {
        expect(TestMapShallow).toMatchSnapshot();
    });

    it('Has an inner Google Maps', () => {
        expect(TestMap.find('GoogleMap').length).toBe(1);
    });
});
