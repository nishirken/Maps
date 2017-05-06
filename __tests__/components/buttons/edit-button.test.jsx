import { EditButton } from 'Components';

describe('Edit button', () => {
    const TestEditButton = shallow(<EditButton />);

    it('Rendered', () => {
        expect(TestEditButton).toMatchSnapshot();
    });
});
