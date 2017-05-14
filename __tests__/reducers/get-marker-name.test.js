import { List, fromJS, Map } from 'immutable';
import { getMarkerName } from 'Reducers';
import { MARKER_NAME } from 'Constants';

describe('Reducer marker name', () => {
    const state = fromJS([
        {
            index: 1,
            name: 'Your Marker',
        },
    ]);

    const payload = Map({
        index: 2,
        name: 'Marker',
    });

    const action = {
        type: MARKER_NAME,
        payload,
    };

    it('Should return the initial state', () => {
        expect(getMarkerName(undefined, {})).toEqual(List([]));
    });

    it('Should return the marker name array', () => {
        expect(
            getMarkerName(state, action))
            .toEqual(state.push(payload));
    });
});
