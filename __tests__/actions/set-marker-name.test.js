import { Map } from 'immutable';
import { setMarkerName } from 'Actions';
import { MARKER_NAME } from 'Constants';

describe('Action set marker name', () => {
    const payload = Map({
        index: 1,
        name: 'Marker',
        sendToApi: true,
    });

    it('Should create an action to add marker name', () => {
        const expectedValue = {
            type: MARKER_NAME,
            payload,
        };

        expect(setMarkerName(payload.get('index'), payload.get('name'))).toEqual(expectedValue);
    });
});
