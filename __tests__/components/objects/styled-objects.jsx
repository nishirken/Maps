import StyledObjects from 'Components/objects/styled-objects';
import 'jest-styled-components';

describe('Styled objects', () => {
    const TestStyledObjects = shallow(<StyledObjects />);

    it('Rendered', () => {
        expect(TestStyledObjects).toMatchStyledComponentsSnapshot();
    });

    it('Should change right style property, when opened', () => {
        TestStyledObjects.setProps({ open: true });
        expect(TestStyledObjects).toMatchStyledComponentsSnapshot();
    });
});
