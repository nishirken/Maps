import { getMarkers } from 'Reducers';
import { CREATE_MARKER } from 'Constants';

describe('Reducer get markers', () => {
    const payload = {
        name: 'Marker',
        coords: {
            lat: 323,
            lng: 299,
            x: 10,
            y: 10,
        },
    };

    it('should return the initial state', () => {
        expect(getMarkers(undefined, {})).toEqual([]);
    });

    it('Should get markers array', () => {
        expect(
            getMarkers([], {
                type: CREATE_MARKER,
                payload,
            }))
            .toEqual([
                payload,
            ]);
    });

    it('Should get markers array without name', () => {
        expect(
            getMarkers([], {
                type: CREATE_MARKER,
                payload: {
                    coords: payload.coords,
                },
            }))
            .toEqual([
                {
                    coords: payload.coords,
                },
            ]);
    });
});
