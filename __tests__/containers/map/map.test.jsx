import { MapContainer } from 'Containers';
import store from 'TestStore';

describe('Map container', () => {
    const TestMapContainer = shallow(<MapContainer store={store} />);

    it('Rendered', () => {
        expect(TestMapContainer).toMatchSnapshot();
    });
});
