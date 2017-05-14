import { ObjectsItem } from 'Components';

describe('Objects item component', () => {
    const TestObjectsItem = shallow(<ObjectsItem />);

    it('Rendered', () => {
        expect(TestObjectsItem).toMatchSnapshot();
    });
    
    it('Should set delete object indexes', () => {
        const event = {
            stopPropagation: jest.fn(),
        };

        TestObjectsItem.setProps({
            setObjectDeleteIndex: jest.fn(),
            markerIndex: 1,
            index: 0,
        });
        TestObjectsItem.instance().deleteHandler(event);
        expect(event.stopPropagation).toHaveBeenCalledTimes(1);
        expect(TestObjectsItem.instance().props.setObjectDeleteIndex)
            .toHaveBeenCalledWith(
                TestObjectsItem.instance().props.markerIndex,
                TestObjectsItem.instance().props.index,
            );
    });
});
