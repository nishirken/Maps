import { Map, fromJS, List as ImmutableList } from 'immutable';
import { List } from 'Components';

describe('List', () => {
    const markerCoords = fromJS([
        {
            index: 0,
            coords: {
                x: 200,
                y: 201,
                lat: 299,
                lng: 300,
            },
        },
        {
            index: 1,
            coords: {
                x: 100,
                y: 101,
                lat: 300,
                lng: 301,
            },
        },
    ]);

    const markerNames = fromJS([
        {
            index: 0,
            name: 'Marker0',
        },
        {
            index: 1,
            name: 'Marker1',
        },
        {
            index: 1,
            name: 'EditedMarkerName',
        },
    ]);

    const objects = fromJS([
        {
            markerIndex: 0,
            object: {
                index: 0,
                name: 'Object for 0',
            },
        },
        {
            markerIndex: 1,
            object: {
                index: 0,
                name: 'Object for 1',
            },
        },
        {
            markerIndex: 1,
            object: {
                index: 1,
                name: 'Object for 1',
            },
        },
    ]);

    const ListShallow = shallow(
        <List
            getMarkerCoords={ImmutableList([])}
            getMarkerDeleteIndexes={ImmutableList([])}
            getMarkerName={ImmutableList([])}
            getMarkerSearchIndexes={ImmutableList([])}
            getObjectDeleteIndexes={ImmutableList([])}
            getObjects={ImmutableList([])}
        />
    );
    const ListMount = mount(
        <List
            getCurrentMarker={Map({})}
            getMarkerCoords={markerCoords}
            getMarkerDeleteIndexes={ImmutableList([])}
            getMarkerName={markerNames}
            getMarkerSearchIndexes={ImmutableList([])}
            getObjectDeleteIndexes={ImmutableList([])}
            getObjects={ImmutableList([])}
        />
    );

    it('Rendered', () => {
        expect(ListShallow).toMatchSnapshot();
    });

    it('Render the list-items', () => {
        expect(ListMount.find('ListItem').length).toBe(2);
    });

    it('Don\'t have to show deleted markers', () => {
        const markerDeleteIndexes = ImmutableList([0]);
        const expectedListItemLength = markerCoords.size - 1;

        ListMount.setProps({ getMarkerDeleteIndexes: markerDeleteIndexes });
        expect(ListMount.find('ListItem').length).toBe(expectedListItemLength);
    });

    it('Has a last in a list marker name', () => {
        const expectedMarkerName = markerNames.get(2).get('name');

        expect(ListMount.find('ListItem').prop('markerName')).toBe(expectedMarkerName);
    });

    it('Filtering an objects to the list-item', () => {
        ListMount.setProps({ getObjects: objects });
        expect(ListMount.find('ListItem').prop('markerObjects').size).toBe(2);
    });

    it('Filtering deleted object indexes', () => {
        const objectDeleteIndexes = fromJS([
            {
                markerIndex: 1,
                index: 0,
                sendToApi: true,
            },
        ]);
        const expectedListItemProp = ImmutableList([0]);

        ListMount.setProps({ getObjectDeleteIndexes: objectDeleteIndexes });
        expect(ListMount.find('ListItem').prop('objectDeleteIndexes')).toEqual(expectedListItemProp);
    });
});
