import { Map, List as ImmutableList } from 'immutable';
import { List } from 'Components';
import initialState from 'InitialState';

jest.useFakeTimers();

describe('List', () => {
    let TestList = {};

    beforeEach(() => {
        jest.resetModules();
        TestList = shallow(
            <List
                getCurrentMarker={Map({})}
                getMarkerCoords={initialState.get('getMarkerCoords')}
                getMarkerDeleteIndexes={ImmutableList([])}
                getMarkerName={initialState.get('getMarkerName')}
                getMarkerSearchIndexes={ImmutableList([])}
                getObjectDeleteIndexes={ImmutableList([])}
                getObjects={ImmutableList([])}
            />
        );
    });

    it('Rendered', () => {
        expect(TestList).toMatchSnapshot();
    });

    it('Render the list-items', () => {
        expect(TestList.find('ListItem').length).toBe(2);
    });

    it('Don\'t have to show deleted markers', () => {
        const expectedListItemLength =
            initialState.get('getMarkerCoords').size - initialState.get('getMarkerDeleteIndexes').size;

        TestList.setProps({ getMarkerDeleteIndexes: initialState.get('getMarkerDeleteIndexes') });
        expect(TestList.find('ListItem').length).toBe(expectedListItemLength);
    });

    test('№1 marker has a last in a list marker name', () => {
        const expectedMarkerName = initialState.get('getMarkerName').get(2).get('name');

        expect(TestList.find('ListItem').at(1).prop('markerName')).toBe(expectedMarkerName);
    });

    test('№1 marker filtered an objects to the list-item', () => {
        TestList.setProps({ getObjects: initialState.get('getObjects') });
        expect(TestList.find('ListItem').at(1).prop('markerObjects').size).toBe(2);
    });

    test('№1 marker filtered deleted object indexes', () => {
        const expectedListItemProp = ImmutableList([0]);

        TestList.setProps({
            getObjectDeleteIndexes: initialState.get('getObjectDeleteIndexes'),
            getObjects: initialState.get('getObjects'),
        });
        expect(TestList.find('ListItem').at(1).prop('objectDeleteIndexes')).toEqual(expectedListItemProp);
    });

    it('Change state when called mouseEnterHandler method', () => {
        expect(TestList.state('mouseEnter')).toBe(false);
        TestList.instance().mouseEnterHandler();
        expect(TestList.state('mouseEnter')).toBe(true);
    });

    it('Clear timeout when called mouseEnterHandler method', () => {
        const cb = jest.fn();
        
        TestList.instance().mouseLeaveTimeOut = setTimeout(cb, 2000);
        TestList.instance().mouseEnterHandler();
        jest.runTimersToTime(2000);
        expect(cb.mock.calls.length).toBe(0);
    });

    it('Change state when called mouseLeaveHandler method', () => {
        TestList.setState({ mouseEnter: true });
        expect(TestList.state('mouseEnter')).toBe(true);
        TestList.instance().mouseLeaveHandler();
        jest.runAllTimers();
        expect(TestList.state('mouseEnter')).toBe(false);
    });
});
