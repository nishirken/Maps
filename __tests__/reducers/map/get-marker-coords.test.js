import { getMarkerCoords } from 'Reducers';
import { MARKER_COORDS } from 'Constants';

describe('Reducer', () => {
    it('Should return the initial state', () => {
        expect(getMarkerCoords([], {})).toEqual([]);
    });

    it('Should return the marker coords', () => {
        const state = [
            {
                index: 0,
                coords: {
                    x: 333,
                    y: 225,
                    lat: 200,
                    lng: 300,
                },
            },
        ];

        const action = {
            type: MARKER_COORDS,
            payload: {
                index: 1,
                coords: {
                    x: 222,
                    y: 222,
                    lat: 201,
                    lng: 201,
                },
            },
        };

        expect(getMarkerCoords(state, action)).toEqual([
            ...state,
            action.payload,
        ]);
    });
});
