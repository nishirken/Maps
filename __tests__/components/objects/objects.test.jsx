import { List } from 'immutable';
import { testInitialState } from 'Store';
import { Objects } from 'Components';
import StyledObjectNameField from 'Components/objects/styled-object-name-field';
import StyledCreateObjectButton from 'Components/objects/styled-create-object-button';

describe('Objects component', () => {
    const objects = List([
        testInitialState.get('getObjects').get(1).get('object'),
        testInitialState.get('getObjects').get(2).get('object'),
    ]);
    let TestObjects = {};

    beforeEach(() => {
        jest.resetModules();
        TestObjects = shallow(
            <Objects
                markerIndex={1}
                markerObjects={objects}
                objectDeleteIndexes={List([])}
            />
        );
    });

    it('Rendered', () => {
        expect(TestObjects).toMatchSnapshot();
    });

    it('Should rendered objects item', () => {
        expect(TestObjects.find('ObjectsItem').length).toBe(2);
    });

    it('Should filtered objects item by delete indexes', () => {
        TestObjects.setProps({ objectDeleteIndexes: List([1]) });
        expect(TestObjects.find('ObjectsItem').length).toBe(1);
    });

    it('Should render name field, when state has a createObject property', () => {
        TestObjects.setState({ createObject: true });
        expect(TestObjects.instance().renderCreateObject().type).toBe(StyledObjectNameField);
    });

    it('Should render create object button, when state doesn\'t has a createObject property', () => {
        TestObjects.setState({ createObject: false });
        expect(TestObjects.instance().renderCreateObject().type).toBe(StyledCreateObjectButton);
    });

    test('toggleCreateObject method', () => {
        TestObjects.setState({ createObject: false });
        TestObjects.instance().toggleCreateObject();
        expect(TestObjects.state('createObject')).toBeTruthy();
    });

    it('Should save object name value', () => {
        const event = {
            target: {
                value: 'object',
            },
        };

        TestObjects.instance().onChangeHandler(event);
        expect(TestObjects.instance().objectName).toBe(event.target.value);
    });

    it('Should validate empty entered object name', () => {
        expect(TestObjects.instance().objectNameValidate('newObject')).toBe('newObject');
        expect(TestObjects.instance().objectNameValidate('')).toBe('object');
    });

    it('Should toggle create object condition, when pushing esc or enter button', () => {
        const event = keyCode => {
            return {
                keyCode,
            };
        };

        TestObjects.setProps({ setObject: jest.fn() });
        TestObjects.instance().toggleCreateObject = jest.fn();
        TestObjects.instance().onKeyDownHandler(event(13));
        expect(TestObjects.instance().toggleCreateObject).toHaveBeenCalledTimes(1);
        TestObjects.instance().onKeyDownHandler(event(27));
        expect(TestObjects.instance().toggleCreateObject).toHaveBeenCalledTimes(2);
    });

    it('Should focused on the input, when update', () => {
        TestObjects.setState({ createObject: true });
        TestObjects.instance().input = {
            focus: jest.fn(),
        };

        TestObjects.instance().componentDidUpdate();
        expect(TestObjects.instance().input.focus).toHaveBeenCalled();
    });
});
