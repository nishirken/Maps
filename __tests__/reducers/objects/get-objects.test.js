import { getObjects } from 'Reducers';
import { OBJECTS } from 'Constants';

describe('Reducer get objects', () => {
    it('Should return the initial state', () => {
        expect(getObjects([], {})).toEqual([]);
    });

    it('Should return objects for list item', () => {
        const state = [
            {
                markerIndex: 0,
                object: {
                    index: 1,
                    name: 'Object111',
                },
            },
        ];

        const action = {
            type: OBJECTS,
            payload: {
                markerIndex: 1,
                object: {
                    index: 0,
                    name: 'Object',
                },
            },
        };

        expect(getObjects(state, action)).toEqual([...state, action.payload]);
    });
});
