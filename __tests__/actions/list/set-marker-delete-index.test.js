import { Map } from 'immutable';
import { setMarkerDeleteIndex } from 'Actions';
import { DELETE_MARKER } from 'Constants';

describe('Action delete marker index', () => {
    it('Should create an index for delete marker', () => {
        const payload = Map({
            index: 1,
            sendToApi: true,
        });

        const expectedValue = {
            type: DELETE_MARKER,
            payload,
        };

        expect(setMarkerDeleteIndex(payload.get('index'))).toEqual(expectedValue);
    });
});
