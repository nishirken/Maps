import { getObjectDeleteIndexes } from 'Reducers';
import { DELETE_OBJECT } from 'Constants';

describe('Reducer get object delete indexes', () => {
    it('Should return the initial state', () => {
        expect(getObjectDeleteIndexes([], {})).toEqual([]);
    });

    it('Should return object delete indexes', () => {
        const state = [
            {
                markerIndex: 1,
                index: 1,
            },
        ];

        const action = {
            type: DELETE_OBJECT,
            payload: {
                markerIndex: 1,
                index: 0,
            },
        };

        expect(getObjectDeleteIndexes(state, action)).toEqual([...state, action.payload]);
    });
});
