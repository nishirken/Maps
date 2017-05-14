import { List } from 'immutable';
import { setMarkerSearchIndexes } from 'Actions';
import { MARKER_SEARCH } from 'Constants';

describe('Action search marker indexes', () => {
    it('Should create an array of indexes for search marker', () => {
        const payload = List([0, 2]);

        const expectedValue = {
            type: MARKER_SEARCH,
            payload,
        };

        expect(setMarkerSearchIndexes(payload)).toEqual(expectedValue);
    });
});
