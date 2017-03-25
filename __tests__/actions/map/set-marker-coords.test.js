import { setMarkerCoords } from 'Actions';
import { MARKER_COORDS } from 'Constants';

describe('Action set marker coords', () => {
    const payload = {
        index: 1,
        coords: {
            lat: 322,
            lng: 299,
            x: 10,
            y: 11,
        },
    };

    it('Should create an action to add marker coords', () => {
        const expectedValue = {
            type: MARKER_COORDS,
            payload,
        };

        expect(setMarkerCoords(payload.index, payload.coords)).toEqual(expectedValue);
    });
});
