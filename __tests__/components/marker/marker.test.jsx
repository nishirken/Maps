import { Marker } from 'Components';

describe('Rendered', () => {
    const TestMarker = shallow(<Marker />);

    it('Rendered', () => {
        expect(TestMarker).toMatchSnapshot();
    });
});
