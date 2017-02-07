import { createMarker } from 'Actions';
import { CREATE_MARKER } from 'Constants';

describe('Action set new marker', () => {
    const payload = {
        name: 'Marker',
        coords: {
            lat: 322,
            lng: 299,
            x: 10,
            y: 11,
        },
    };

    it('Should create an action to add new marker', () => {
        const expectedValue = {
            type: CREATE_MARKER,
            payload,
        };

        expect(createMarker(payload.coords, payload.name)).toEqual(expectedValue);
    });

    it('Should work without enter name', () => {
        const expectedValue = {
            type: CREATE_MARKER,
            payload: {
                coords: payload.coords,
            },
        };

        expect(createMarker(payload.coords)).toEqual(expectedValue);
    });
});
