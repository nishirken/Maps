import { ListContainer } from 'Containers';
import store from 'TestStore';

describe('List container', () => {
    const TestListContainer = shallow(<ListContainer store={store} />);

    it('Rendered', () => {
        expect(TestListContainer).toMatchSnapshot();
    });
});
