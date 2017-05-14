import { ListContainer } from 'Containers';
import { testStore } from 'Store';

describe('List container', () => {
    const TestListContainer = shallow(<ListContainer store={testStore} />);

    it('Rendered', () => {
        expect(TestListContainer).toMatchSnapshot();
    });
});
