import { MARKER_CHOICE } from 'Constants';

export default (markerIndex) => {
    return {
        type: MARKER_CHOICE,
        markerIndex,
    };
};
