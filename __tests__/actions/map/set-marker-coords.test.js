import { fromJS } from 'immutable';
import { setMarkerCoords } from 'Actions';
import { MARKER_COORDS } from 'Constants';

describe('Action set marker coords', () => {
    const payload = fromJS({
        index: 1,
        coords: {
            lat: 322,
            lng: 299,
            x: 10,
            y: 11,
        },
        sendToApi: true,
    });

    it('Should create an action to add marker coords', () => {
        const expectedValue = {
            type: MARKER_COORDS,
            payload,
        };

        expect(setMarkerCoords(payload.get('index'), payload.get('coords'))).toEqual(expectedValue);
    });
});
