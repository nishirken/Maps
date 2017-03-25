import { getMarkerDeleteIndexes } from 'Reducers';
import { DELETE_MARKER } from 'Constants';

describe('Reducer get marker delete indexes', () => {
    it('Should return the initial state', () => {
        expect(getMarkerDeleteIndexes([], {})).toEqual([]);
    });

    it('Should return the marker delete indexes array', () => {
        const state = [0, 2];
        const actionPayload = 1;

        expect(
            getMarkerDeleteIndexes(state, {
                type: DELETE_MARKER,
                deleteMarkerIndex: actionPayload,
            }))
            .toEqual([
                ...state,
                actionPayload,
            ]);
    });
});
