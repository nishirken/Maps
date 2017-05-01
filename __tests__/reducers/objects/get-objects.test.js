import { List, fromJS } from 'immutable';
import { getObjects } from 'Reducers';
import { OBJECTS } from 'Constants';

describe('Reducer get objects', () => {
    it('Should return the initial state', () => {
        expect(getObjects(undefined, {})).toEqual(List([]));
    });

    it('Should return objects for list item', () => {
        const state = fromJS([
            {
                markerIndex: 0,
                object: {
                    index: 1,
                    name: 'Object111',
                },
            },
        ]);

        const payload = fromJS({
            markerIndex: 1,
            object: {
                index: 0,
                name: 'Object',
            },
        });

        const action = {
            type: OBJECTS,
            payload,
        };

        expect(getObjects(state, action)).toEqual(state.push(payload));
    });
});
