import { setMarkerIndex } from 'Actions';
import { MARKER_INDEX } from 'Constants';

describe('Action set marker index', () => {
    const payload = 1;

    it('Should create an action to add new marker index', () => {
        const expectedValue = {
            type: MARKER_INDEX,
            payload,
        };

        expect(setMarkerIndex(payload)).toEqual(expectedValue);
    });
});
