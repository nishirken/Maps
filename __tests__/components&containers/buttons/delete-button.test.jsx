import { DeleteButton } from 'Components';

describe('Delete button', () => {
    const TestDeleteButtonShallow = shallow(<DeleteButton />);
    const TestDeleteButton = mount(<DeleteButton />);

    it('Rendered', () => {
        expect(TestDeleteButtonShallow).toMatchSnapshot();
    });
});
