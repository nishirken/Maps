import { Map, fromJS } from 'immutable';
import { getCurrentMarker } from 'Reducers';
import { CURRENT_MARKER } from 'Constants';

describe('Reducer get current marker', () => {
    it('Should return the initial state', () => {
        const initialState = fromJS({
            index: null,
            coords: {},
        });

        expect(getCurrentMarker(initialState, Map({}))).toBe(initialState);
    });

    it('Should return current marker', () => {
        const state = fromJS([
            {
                index: 0,
                coords: {
                    lat: 200,
                    lng: 300,
                },
            },
        ]);

        const action = {
            type: CURRENT_MARKER,
            payload: fromJS({
                index: 1,
                coords: {
                    lat: 201,
                    lng: 201,
                },
            }),
        };

        expect(getCurrentMarker(state, action)).toEqual(action.payload);
    });
});
