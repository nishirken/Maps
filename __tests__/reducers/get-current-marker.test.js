import { getCurrentMarker } from 'Reducers';
import { CURRENT_MARKER } from 'Constants';

describe('Reducer', () => {
    it('Should return the initial state', () => {
        expect(getCurrentMarker(null, {})).toBe(null);
    });

    it('Should return current marker', () => {
        const state = [
            {
                index: 0,
                coords: {
                    lat: 200,
                    lng: 300,
                },
            },
        ];

        const action = {
            type: CURRENT_MARKER,
            payload: {
                index: 1,
                coords: {
                    lat: 201,
                    lng: 201,
                },
            },
        };

        expect(getCurrentMarker(state, action)).toEqual(action.payload);
    });
});
