import { Filter } from 'Components';
import initialState from 'InitialState';
import { List } from 'immutable';

describe('Filter class', () => {
    const TestFilter = shallow(<Filter />);
    const coords = initialState.get('getMarkerCoords');
    const deleteIndexes = List([0]);
    const searchIndexes = List([1]);

    test('processingMarkerDeleteIndexes method, for filtering coords array by delete indexes array', () => {
        const expectedCoordsArray = coords.remove(0);

        expect(TestFilter.instance().processingMarkerDeleteIndexes(coords, deleteIndexes))
            .toEqual(expectedCoordsArray);
    });

    test('processingMarkerSearchNames method, for filtering coords array by search indexes array', () => {
        const expectedCoordsArray = coords.remove(1);

        expect(TestFilter.instance().processingMarkerSearchNames(coords, deleteIndexes))
            .toEqual(expectedCoordsArray);
    });
});
