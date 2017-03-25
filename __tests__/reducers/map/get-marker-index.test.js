import { getMarkerIndex } from 'Reducers';
import { MARKER_INDEX } from 'Constants';

describe('Reducer', () => {
    it('Should return the initial state', () => {
        expect(getMarkerIndex(-1, {})).toBe(-1);
    });

    it('Should return the marker index', () => {
        const state = 3;

        const action = {
            type: MARKER_INDEX,
            payload: 4,
        };

        expect(getMarkerIndex(state, action)).toEqual(action.payload);
    });
});
