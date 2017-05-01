import { Buttons } from 'Components';

describe('Buttons in the marks list item', () => {
    const TestButtonsShallow = shallow(<Buttons />),
        TestButtons = mount(<Buttons />);

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
