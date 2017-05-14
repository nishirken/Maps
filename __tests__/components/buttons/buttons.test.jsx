import { Buttons } from 'Components';

describe('Buttons in the marks list item', () => {
    const TestButtons = shallow(<Buttons />);

    it('Rendered', () => {
        expect(TestButtons).toMatchSnapshot();
    });

    it('Has an edit button', () => {
        expect(TestButtons.find('EditButton').length).toBe(1);
    });

    it('Has a delete button', () => {
        expect(TestButtons.find('DeleteButton').length).toBe(1);
    });
});
