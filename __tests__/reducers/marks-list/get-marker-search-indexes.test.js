import { getMarkerSearchIndexes } from 'Reducers';
import { MARKER_SEARCH } from 'Constants';

describe('Reducer get marker search indexes', () => {
    it('Should return the initial state', () => {
        expect(getMarkerSearchIndexes([], {})).toEqual([]);
    });

    it('Should return the marker search indexes array', () => {
        const state = [];
        const actionPayload = [1, 2, 3];

        expect(
            getMarkerSearchIndexes(state, {
                type: MARKER_SEARCH,
                markerSearchIndexes: actionPayload,
            }))
            .toEqual(actionPayload);
    });
});
