import { Filter } from 'Components';
import { testInitialState } from 'Store';
import { List, Map } from 'immutable';

describe('Filter class', () => {
    const TestFilter = shallow(<Filter />);
    const coords = testInitialState.get('getMarkerCoords');

    test('processingMarkerDeleteIndexes method, for filtering coords array by delete indexes array', () => {
        const expectedCoordsArray = coords.remove(0);
        const markerForDelete = Map({ index: 0, sendToApi: true });
        const deleteIndexes = List([markerForDelete]);

        expect(TestFilter.instance().processingMarkerDeleteIndexes(coords, deleteIndexes))
            .toEqual(expectedCoordsArray);
    });

    test('processingMarkerSearchNames method, for filtering coords array by search indexes array', () => {
        const expectedCoordsArray = coords.remove(0);
        const searchedIndexes = List([1]);

        expect(TestFilter.instance().processingMarkerSearchNames(coords, searchedIndexes))
            .toEqual(expectedCoordsArray);
    });
});
