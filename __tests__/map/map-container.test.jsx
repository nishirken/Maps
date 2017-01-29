import { mount } from 'enzyme';
import { MapContainer } from 'Containers/map/map-container';

describe('Map', () => {
    const Map = mount(
        <MapContainer />
    );

    it('Rendered', () => {
        expect(Map.find('section').length).toBe(1);
    });

    it('Has an inner Google Maps', () => {
        expect(Map.find('section').children().length).toBeGreaterThanOrEqual(1);
    });
});
