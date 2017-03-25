import { setMarkerDeleteIndex } from 'Actions';
import { DELETE_MARKER } from 'Constants';

describe('Action delete marker index', () => {
    it('Should create an index for delete marker', () => {
        const value = 1;

        const expectedValue = {
            type: DELETE_MARKER,
            deleteMarkerIndex: value,
        };

        expect(setMarkerDeleteIndex(value)).toEqual(expectedValue);
    });
});
