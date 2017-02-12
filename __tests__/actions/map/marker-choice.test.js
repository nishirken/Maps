import { markerChoice } from 'Actions';
import { MARKER_CHOICE } from 'Constants';

describe('Marker choice on onClick', () => {
    it('Should create an action with marker index and coords', () => {
        const coords = {
                lat: 299,
                lng: 300,
            },
            markerIndex = 1;

        const expectedValue = {
            type: MARKER_CHOICE,
            payload: {
                markerIndex,
                coords,
            },
        };

        expect(markerChoice(markerIndex, coords)).toEqual(expectedValue);
    });
});
