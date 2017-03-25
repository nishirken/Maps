import { setMarkerSearchIndexes } from 'Actions';
import { MARKER_SEARCH } from 'Constants';

describe('Action search marker indexes', () => {
    it('Should create an array of indexes for search marker', () => {
        const value = [0, 2];

        const expectedValue = {
            type: MARKER_SEARCH,
            markerSearchIndexes: value,
        };

        expect(setMarkerSearchIndexes(value)).toEqual(expectedValue);
    });
});
