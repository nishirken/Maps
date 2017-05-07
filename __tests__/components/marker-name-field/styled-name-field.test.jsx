import StyledNameField from 'Components/marker-name-field/styled-name-field';
import 'jest-styled-components';

describe('Styled name field', () => {
    const TestStyledNameField = shallow(<StyledNameField />);

    it('Rendered', () => {
        TestStyledNameField.setProps({ x: 10, y: 11 });
        expect(TestStyledNameField).toMatchStyledComponentsSnapshot();
    });

    it('Rendered with another props', () => {
        TestStyledNameField.setProps({ x: 200, y: 300 });
        expect(TestStyledNameField).toMatchStyledComponentsSnapshot();
    });
});
