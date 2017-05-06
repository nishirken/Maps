import { DeleteButton } from 'Components';

describe('Delete button', () => {
    const TestDeleteButton = shallow(<DeleteButton />);

    it('Rendered', () => {
        expect(TestDeleteButton).toMatchSnapshot();
    });
});
