import { List, fromJS } from 'immutable';
import { getMarkerCoords } from 'Reducers';
import { MARKER_COORDS } from 'Constants';

describe('Reducer', () => {
    it('Should return the initial state', () => {
        expect(getMarkerCoords(undefined, {})).toEqual(List([]));
    });

    it('Should return the marker coords', () => {
        const state = fromJS([
            {
                index: 0,
                coords: {
                    x: 333,
                    y: 225,
                    lat: 200,
                    lng: 300,
                },
            },
        ]);

        const payload = fromJS({
            index: 1,
            coords: {
                x: 222,
                y: 222,
                lat: 201,
                lng: 201,
            },
        });

        const action = {
            type: MARKER_COORDS,
            payload,
        };

        expect(getMarkerCoords(state, action)).toEqual(state.push(action.payload));
    });
});
