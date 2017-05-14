import { fromJS, Map } from 'immutable';
import { ListItem, Objects } from 'Components';

describe('Marks list item', () => {
    const coords = Map({
        lat: 299,
        lng: 300,
    });
    const objects = fromJS([
        {
            object: {
                index: 0,
                name: 'Object for 1',
            },
        },
        {
            object: {
                index: 1,
                name: 'Object for 1',
            },
        },
    ]);
    let TestMarksLIstItem = {};

    beforeEach(() => {
        jest.resetModules();
        TestMarksLIstItem = shallow(
            <ListItem
                current={false}
                markerCoords={coords}
                markerIndex={1}
                markerObjects={objects}
                setMarkerName={jest.fn()}
            />
        );
    });

    it('Rendered', () => {
        expect(TestMarksLIstItem).toMatchSnapshot();
    });

    it('Should return objects for current marker in render objects, when selected', () => {
        TestMarksLIstItem.setProps({ current: true });
        expect(TestMarksLIstItem.instance().renderObjectsList().type).toBe(Objects);
    });

    it('Should return in render objects null, when not selected', () => {
        expect(TestMarksLIstItem.instance().renderObjectsList()).toBe(null);
    });

    it('Should save new marker name', () => {
        const value = 'EditedMarker';

        TestMarksLIstItem.instance().setNewMarkerName(value);
        expect(TestMarksLIstItem.instance().newMarkerName).toBe(value);
    });

    it('Should switch editing marker name condition', () => {
        TestMarksLIstItem.setState({ editMarkerName: true });
        TestMarksLIstItem.instance().switchEditMarkerName();
        expect(TestMarksLIstItem.state('editMarkerName')).toBeFalsy();
    });

    it('Should save can send marker name property', () => {
        TestMarksLIstItem.instance().switchEditMarkerName(true);
        expect(TestMarksLIstItem.instance().canSendMarkerName).toBeTruthy();
    });

    it('Should execute setCurrentMarker from props, on listItemOnclickHandler', () => {
        TestMarksLIstItem.setProps({
            setCurrentMarker: jest.fn(),
        });
        TestMarksLIstItem.instance().listItemOnclickHandler();
        expect(TestMarksLIstItem.instance().props.setCurrentMarker)
            .toHaveBeenCalledWith(
                TestMarksLIstItem.instance().props.markerIndex,
                coords
            );
    });

    test('Should execute setMarkerName method after update component', () => {
        const newMarkerName = 'EditedMarker';

        TestMarksLIstItem.setProps({
            markerName: 'marker',
        });
        TestMarksLIstItem.instance().canSendMarkerName = true;
        TestMarksLIstItem.instance().newMarkerName = newMarkerName;
        TestMarksLIstItem.instance().componentDidUpdate();
        expect(TestMarksLIstItem.instance().props.setMarkerName)
            .toHaveBeenCalledWith(
                TestMarksLIstItem.instance().props.markerIndex,
                newMarkerName,
            );
    });

    it('Should set newMarkerName and canSendMarkerName properties to it initial values', () => {
        TestMarksLIstItem.instance().canSendMarkerName = true;
        TestMarksLIstItem.instance().newMarkerName = 'EditedMarker';
        TestMarksLIstItem.instance().componentDidUpdate();
        expect(TestMarksLIstItem.instance().canSendMarkerName).toBeFalsy();
        expect(TestMarksLIstItem.instance().newMarkerName).toBe(null);
    });
});
