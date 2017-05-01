import { Map } from 'immutable';
import { setObjectDeleteIndex } from 'Actions';
import { DELETE_OBJECT } from 'Constants';

describe('Set object delete index', () => {
    it('Should create a delete object index', () => {
        const value = Map({
            markerIndex: 1,
            index: 0,
            sendToApi: true,
        });

        const expectedValue = {
            type: DELETE_OBJECT,
            payload: value,
        };

        expect(setObjectDeleteIndex(value.get('markerIndex'), value.get('index')))
            .toEqual(expectedValue);
    });
});
