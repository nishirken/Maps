import { List, Map, fromJS } from 'immutable';
import { getObjectDeleteIndexes } from 'Reducers';
import { DELETE_OBJECT } from 'Constants';

describe('Reducer get object delete indexes', () => {
    it('Should return the initial state', () => {
        expect(getObjectDeleteIndexes(undefined, {})).toEqual(List([]));
    });

    it('Should return object delete indexes', () => {
        const state = fromJS([
            {
                markerIndex: 1,
                index: 1,
            },
        ]);

        const payload = Map({
            markerIndex: 0,
            index: 1,
            sendToApi: true,
        });

        const action = {
            type: DELETE_OBJECT,
            payload,
        };

        expect(getObjectDeleteIndexes(state, action)).toEqual(state.push(payload));
    });
});
