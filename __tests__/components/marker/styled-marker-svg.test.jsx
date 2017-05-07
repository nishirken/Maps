import StyledMarkerSvg from 'Components/marker/styled-marker-svg';
import 'jest-styled-components';

describe('Rendered', () => {
    const TestStyledMarkerSvg = shallow(<StyledMarkerSvg />);

    it('Rendered', () => {
        expect(TestStyledMarkerSvg).toMatchStyledComponentsSnapshot();
    });

    it('Should change transform style property, when getting a center property', () => {
        TestStyledMarkerSvg.setProps({ current: true });
        expect(TestStyledMarkerSvg).toMatchStyledComponentsSnapshot();
    });
});
