import { setMarkerName } from 'Actions';
import { MARKER_NAME } from 'Constants';

describe('Action set marker name', () => {
    const payload = {
        index: 1,
        name: 'Marker',
    };

    it('Should create an action to add marker name', () => {
        const expectedValue = {
            type: MARKER_NAME,
            payload,
        };

        expect(setMarkerName(payload.index, payload.name)).toEqual(expectedValue);
    });

    it('Should work without enter name', () => {
        const expectedValue = {
            type: MARKER_NAME,
            payload: {
                index: payload.index,
            },
        };

        expect(setMarkerName(payload.index)).toEqual(expectedValue);
    });
});
