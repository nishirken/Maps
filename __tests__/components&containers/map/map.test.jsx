import store from 'Store';
import { MapContainer } from 'Containers';

describe('Map', () => {
    const TestMapShallow = shallow(<MapContainer store={store} />),
        TestMap = mount(<MapContainer store={store} />);

    it('Rendered', () => {
        expect(TestMapShallow).toMatchSnapshot();
    });

    it('Has an inner Google Maps', () => {
        expect(TestMap.find('GoogleMap').length).toBe(1);
    });
});
