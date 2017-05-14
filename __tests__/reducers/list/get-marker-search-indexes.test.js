import { List } from 'immutable';
import { getMarkerSearchIndexes } from 'Reducers';
import { MARKER_SEARCH } from 'Constants';

describe('Reducer get marker search indexes', () => {
    it('Should return the initial state', () => {
        expect(getMarkerSearchIndexes(undefined, {})).toEqual(List([]));
    });

    it('Should return the marker search indexes array', () => {
        const state = List([]);
        const payload = List([1, 2, 3]);

        expect(
            getMarkerSearchIndexes(state, {
                type: MARKER_SEARCH,
                payload,
            }))
            .toEqual(payload);
    });
});
