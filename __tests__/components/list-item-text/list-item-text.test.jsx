import { Map } from 'immutable';
import { ListItemText } from 'Components';
import StyledMarkerNameEditField from 'Components/list-item-text/styled-marker-name-edit-field';
import StyledMarkerName from 'Components/list-item-text/styled-marker-name';

describe('Text in a marks list item', () => {
    const coords = Map({
        lat: 299,
        lng: 300,
    });
    let TestListItemText = {};

    beforeEach(() => {
        jest.resetModules();
        TestListItemText = shallow(
            <ListItemText
                markerCoords={coords}
            />
        );
    });

    it('Rendered', () => {
        expect(TestListItemText).toMatchSnapshot();
    });

    it('Should render StyledMarkerNameEditField, when get an editMarkerName property', () => {
        TestListItemText.setProps({ editMarkerName: true });
        expect(TestListItemText.instance().renderMarkerName().type)
            .toBe(StyledMarkerNameEditField);
    });

    it('Should render StyledMarkerName, when doesn\'t have an editMarkerName property', () => {
        TestListItemText.setProps({ editMarkerName: false });
        expect(TestListItemText.instance().renderMarkerName().type)
            .toBe(StyledMarkerName);
    });

    const event = keyCode => {
        return {
            keyCode,
        };
    };

    test('onKeyDownMarkerName handler, with esc keyCode', () => {
        TestListItemText.setProps({ switchEditMarkerName: jest.fn() });
        TestListItemText.instance().onKeyDownMarkerName(event(27));
        expect(TestListItemText.instance().props.switchEditMarkerName)
            .toHaveBeenCalledWith(false);
    });

    test('onKeyDownMarkerName handler, with enter keyCode', () => {
        TestListItemText.setProps({ switchEditMarkerName: jest.fn() });
        TestListItemText.instance().onKeyDownMarkerName(event(13));
        expect(TestListItemText.instance().props.switchEditMarkerName)
            .toHaveBeenCalledWith(true);
    });

    test('onKeyDownMarkerName handler, with any other keyCode', () => {
        TestListItemText.setProps({ switchEditMarkerName: jest.fn() });
        TestListItemText.instance().onKeyDownMarkerName(event(10));
        expect(TestListItemText.instance().props.switchEditMarkerName)
            .not.toHaveBeenCalled();
    });

    test('onChangeMarkerName handler', () => {
        const eventValue = {
            target: {
                value: 'Marker',
            },
        };

        TestListItemText.setProps({ setNewMarkerName: jest.fn() });
        TestListItemText.instance().onChangeMarkerName(eventValue);
        expect(TestListItemText.instance().props.setNewMarkerName)
            .toHaveBeenCalledWith(eventValue.target.value);
    });

    it('Should focused in the editing input, when have a editMarkerName property', () => {
        TestListItemText.instance().input = {
            focus: jest.fn(),
        };
        TestListItemText.setProps({ editMarkerName: true });
        TestListItemText.instance().componentDidUpdate();
        expect(TestListItemText.instance().input.focus).toHaveBeenCalled();
    });
});
