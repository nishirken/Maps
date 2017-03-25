import { getMarkerName } from 'Reducers';
import { MARKER_NAME } from 'Constants';

describe('Reducer marker name', () => {
    const state = [
        {
            index: 1,
            name: 'Your Marker',
        },
    ];

    const payload = {
        index: 1,
        name: 'Marker',
    };

    it('Should return the initial state', () => {
        expect(getMarkerName([], {})).toEqual([]);
    });

    it('Should return the marker name array', () => {
        expect(
            getMarkerName(state, {
                type: MARKER_NAME,
                payload,
            }))
            .toEqual([
                ...state,
                payload,
            ]);
    });
});
