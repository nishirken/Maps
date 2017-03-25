import store from 'Store';
import { Buttons } from 'Components';

describe('Buttons in the marks list item', () => {
    const TestButtonsShallow = shallow(<Buttons store={store} />),
        TestButtons = mount(<Buttons store={store} />);

    it('Rendered', () => {
        expect(TestButtonsShallow).toMatchSnapshot();
    });

    it('Has an edit button', () => {
        expect(TestButtons.find('EditButton').length).toBe(1);
    });

    it('Has a delete button', () => {
        expect(TestButtons.find('DeleteButton').length).toBe(1);
    });
});
