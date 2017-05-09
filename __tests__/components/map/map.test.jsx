import { Map, MarkerNameField } from 'Components';
import { List, Map as ImmutableMap } from 'immutable';
import { testInitialState } from 'Store';

describe('Map', () => {
    let TestMap = {};

    beforeEach(() => {
        jest.resetModules();
        TestMap = shallow(
            <Map
                getCurrentMarker={ImmutableMap({
                    index: null,
                    coords: ImmutableMap({
                        lat: 299,
                        lng: 300,
                    }),
                })}
                getMarkerCoords={testInitialState.get('getMarkerCoords')}
                getMarkerDeleteIndexes={List([])}
                getMarkerIndex={testInitialState.get('getMarkerCoords').size}
                getMarkerSearchIndexes={List([])}
            />
        );
    });

    it('Rendered', () => {
        expect(TestMap).toMatchSnapshot();
    });

    it('Rendered the markers', () => {
        expect(TestMap.find('Marker').length).toBe(testInitialState.get('getMarkerCoords').size);
    });

    const expectedCoords = {
        lat: testInitialState.get('getCurrentMarker').get('coords').get('lat'),
        lng: testInitialState.get('getCurrentMarker').get('coords').get('lng'),
    };

    it('Should centered map when current marker is selected', () => {
        expect(TestMap.instance().centerMap(testInitialState.get('getCurrentMarker')))
            .toEqual(expectedCoords);
    });

    const coords = {
        lat: 299,
        lng: 300,
        event: jest.fn(),
        x: 10,
        y: 11,
    };

    it('Should get marker coords and set state with it when clicking on the map', () => {
        TestMap.instance().getMarkerCoords(coords);
        expect(TestMap.state('coords')).toBe(coords);
        expect(TestMap.state('markerInit')).toBeTruthy();
        expect(TestMap.state('x')).toBe(coords.x);
        expect(TestMap.state('y')).toBe(coords.y);
    });

    it('Should delete coords event property when clicking on the map', () => {
        TestMap.instance().getMarkerCoords(coords);
        expect(TestMap.state('event')).not.toBeDefined();
    });

    const nextIndex = 2;

    it('Should save marker info, when compliting create a marker', () => {
        TestMap.setProps({
            getMarkerIndex: 1,
            setMarkerIndex: jest.fn(),
            setMarkerCoords: jest.fn(),
            setMarkerName: jest.fn(),
        });
        TestMap.setState({
            coords,
        });
        TestMap.instance().completeCreateMarker('marker');
        expect(TestMap.instance().props.setMarkerIndex)
            .toHaveBeenCalledWith(nextIndex);
        expect(TestMap.instance().props.setMarkerCoords)
            .toHaveBeenCalledWith(nextIndex, coords);
        expect(TestMap.instance().props.setMarkerName)
            .toHaveBeenCalledWith(nextIndex, 'marker');
    });

    it('Should set state of marker init', () => {
        TestMap.setProps({
            getMarkerIndex: 1,
            setMarkerIndex: jest.fn(),
            setMarkerCoords: jest.fn(),
            setMarkerName: jest.fn(),
        });
        TestMap.instance().completeCreateMarker('marker');
        expect(TestMap.state('markerInit')).toBeFalsy();
    });

    it('Should set state, when canceling create the marker', () => {
        TestMap.instance().cancelCreateMarker();
        expect(TestMap.state('markerInit')).toBeFalsy();
    });

    it('Should select current marker', () => {
        const index = '1';
        const { lat, lng } = coords;

        TestMap.setProps({ setCurrentMarker: jest.fn() });
        TestMap.instance().markerChoice(index, coords);
        expect(TestMap.instance().props.setCurrentMarker)
            .toHaveBeenCalledWith(Number(index), { lat, lng });
    });

    it('Should render a MarkerNameField component, when started to create marker', () => {
        TestMap.setState({
            markerInit: true,
            x: 10,
            y: 11,
        });
        expect(TestMap.instance().markerNameFieldRender().type).toBe(MarkerNameField);
    });

    it('Should not render a MarkerNameField component, when doesn\'t started to create marker', () => {
        TestMap.setState({
            markerInit: false,
            x: 10,
            y: 11,
        });
        expect(TestMap.instance().markerNameFieldRender()).toBe(null);
    });
});
