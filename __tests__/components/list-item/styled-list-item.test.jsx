import { StyledListItem } from 'Components';
import 'jest-styled-components';

describe('Rendered', () => {
    const TestStyledListItem = shallow(<StyledListItem current={false} />);

    it('Rendered', () => {
        expect(TestStyledListItem).toMatchStyledComponentsSnapshot();
    });

    it('Should change background property, when selected', () => {
        TestStyledListItem.setProps({ current: true });
        expect(TestStyledListItem).toMatchStyledComponentsSnapshot();
    });
});
