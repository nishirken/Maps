import { EditButton } from 'Components';

describe('Edit button', () => {
    const TestEditButtonShallow = shallow(<EditButton />);
    const TestEditButton = mount(<EditButton />);

    it('Rendered', () => {
        expect(TestEditButtonShallow).toMatchSnapshot();
    });
});
