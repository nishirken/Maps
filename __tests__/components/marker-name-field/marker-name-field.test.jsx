import { MarkerNameField } from 'Components';

describe('Marker name field', () => {
    const TestMarkerNameField = shallow(
        <MarkerNameField
            x={100}
            y={99}
        />
    );

    it('Rendered', () => {
        expect(TestMarkerNameField).toMatchSnapshot();
    });

    it('Not rendered, when has a completeCreateMarkerWithoutName state', () => {
        TestMarkerNameField.setState({ completeCreateMarkerWithoutName: true });
        expect(TestMarkerNameField).toMatchSnapshot();
    });

    const event = (keyCode, value) => {
        return {
            keyCode,
            target: {
                value,
            },
        };
    };

    it('Should complete create a marker with saving it name', () => {
        TestMarkerNameField.setProps({ completeCreateMarker: jest.fn() });
        TestMarkerNameField.instance().getMarkerName(event(13, 'marker'));
        expect(TestMarkerNameField.instance().props.completeCreateMarker)
            .toHaveBeenCalledWith('marker');
    });

    it('Should complete create without entering a name', () => {
        TestMarkerNameField.setProps({ completeCreateMarker: jest.fn() });
        TestMarkerNameField.instance().getMarkerName(event(13));
        expect(TestMarkerNameField.instance().props.completeCreateMarker)
            .toHaveBeenCalledWith('Your marker');
    });

    it('Should cancel marker creation', () => {
        TestMarkerNameField.setProps({ cancelCreateMarker: jest.fn() });
        TestMarkerNameField.instance().getMarkerName(event(27));
        expect(TestMarkerNameField.instance().props.cancelCreateMarker).toHaveBeenCalled();
    });

    test('getMarkerName method with keyCode not 13, and not 27', () => {
        TestMarkerNameField.setProps({
            cancelCreateMarker: jest.fn(),
            completeCreateMarker: jest.fn(),
        });
        TestMarkerNameField.instance().getMarkerName(event(20));
        expect(TestMarkerNameField.instance().props.completeCreateMarker)
            .not.toHaveBeenCalled();
        expect(TestMarkerNameField.instance().props.cancelCreateMarker)
            .not.toHaveBeenCalled();
    });
});
