import { NEW_MARKER_NAME } from 'Constants';

export default (markerIndex, newMarkerName) => {
    return {
        type: NEW_MARKER_NAME,
        payload: {
            markerIndex,
            newMarkerName,
        },
    };
};
