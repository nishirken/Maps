import { MapContainer } from 'Containers';
import { testStore } from 'Store';

describe('Map container', () => {
    const TestMapContainer = shallow(<MapContainer store={testStore} />);

    it('Rendered', () => {
        expect(TestMapContainer).toMatchSnapshot();
    });
});
