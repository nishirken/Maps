import { MARKER_CHOICE } from 'Constants';

export default (markerIndex, coords) => {
    return {
        type: MARKER_CHOICE,
        payload: {
            markerIndex,
            coords,
        },
    };
};
