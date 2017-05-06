import StyledListWrapper from 'Components/list/styled-list-wrapper';
import 'jest-styled-components';

describe('Styled list wrapper', () => {
    const TestStyledListWrapper = shallow(<StyledListWrapper />);

    it('Rendered and change opacity and transform styles onMouseOver', () => {
        TestStyledListWrapper.setProps({ mouseEnter: false });
        expect(TestStyledListWrapper).toMatchStyledComponentsSnapshot();
        TestStyledListWrapper.setProps({ mouseEnter: true });
        expect(TestStyledListWrapper).toMatchStyledComponentsSnapshot();
    });
});
