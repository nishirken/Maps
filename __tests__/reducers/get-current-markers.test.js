import { getCurrentMarker } from 'Reducers';
import { MARKER_CHOICE } from 'Constants';

describe('Reducer', () => {
    it('should return the initial state', () => {
        expect(getCurrentMarker(null, {})).toEqual(null);
    });

    it('should return current marker', () => {
        const markerIndex = 1,
            coords = {
                lat: 200,
                lng:300,
            };

        const state = {
            markerIndex,
            coords,
        };

        const action = {
            type: MARKER_CHOICE,
            payload: {
                markerIndex,
                coords,
            },
        };

        expect(getCurrentMarker(state, action)).toEqual(action.payload);
    });
});
