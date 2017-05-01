import { Map } from 'immutable';
import { setCurrentMarker } from 'Actions';
import { CURRENT_MARKER } from 'Constants';

describe('Marker choice on onClick', () => {
    it('Should create an action with marker index and coords', () => {
        const coords = Map({
                lat: 299,
                lng: 300,
            }),
            index = 1;

        const expectedValue = {
            type: CURRENT_MARKER,
            payload: Map({
                index,
                coords,
            }),
        };

        expect(setCurrentMarker(index, coords)).toEqual(expectedValue);
    });
});
