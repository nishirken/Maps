import { setObject } from 'Actions';
import { OBJECTS } from 'Constants';

describe('Set object action', () => {
    it('Should create an object for lis item', () => {
        const value = {
            markerIndex: 1,
            object: {
                index: 0,
                name: 'Objects',
            },
        };

        const expectedValue = {
            type: OBJECTS,
            payload: value,
        };

        expect(setObject(value.markerIndex, value.object.index, value.object.name)).toEqual(expectedValue);
    });
});
