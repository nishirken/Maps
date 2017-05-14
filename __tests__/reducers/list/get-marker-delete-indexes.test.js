import { List } from 'immutable';
import { getMarkerDeleteIndexes } from 'Reducers';
import { DELETE_MARKER } from 'Constants';

describe('Reducer get marker delete indexes', () => {
    it('Should return the initial state', () => {
        expect(getMarkerDeleteIndexes(undefined, {})).toEqual(List([]));
    });

    it('Should return the marker delete indexes array', () => {
        const state = List([0, 2]);
        const payload = 1;

        expect(
            getMarkerDeleteIndexes(state, {
                type: DELETE_MARKER,
                payload,
            }))
            .toEqual(state.push(payload));
    });
});
