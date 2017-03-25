import store from 'Store';
import { Objects } from 'Components';

describe('Objects component', () => {
    const ObjectsShallow = shallow(<Objects store={store} />);

    it('Rendered', () => {
        expect(ObjectsShallow).toMatchSnapshot();
    });
});
