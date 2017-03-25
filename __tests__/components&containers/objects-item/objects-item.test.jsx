import store from 'Store';
import { ObjectsItem } from 'Components';

describe('Objects item component', () => {
    const ObjectsItemShallow = shallow(<ObjectsItem store={store} />);
    const ObjectsItemMount = mount(<ObjectsItem store={store} />);

    it('Rendered', () => {
        expect(ObjectsItemShallow).toMatchSnapshot();
    });

    it('Has a delete button', () => {
        expect(ObjectsItemMount.find('svg').length).toBe(1);
    });

    it('Has an inner text', () => {
        expect(ObjectsItemMount.text().length).toBeGreaterThan(1);
    });
});
