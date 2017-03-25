import { setObjectDeleteIndex } from 'Actions';
import { DELETE_OBJECT } from 'Constants';

describe('Set object delete index', () => {
    it('Should create a delete object index', () => {
        const value = {
            markerIndex: 1,
            index: 0,
        };

        const expectedValue = {
            type: DELETE_OBJECT,
            payload: value,
        };

        expect(setObjectDeleteIndex(value.markerIndex, value.index)).toEqual(expectedValue);
    });
});
