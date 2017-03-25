import { MARKER_COORDS } from 'Constants';

export default (index, coords) => {
    return {
        type: MARKER_COORDS,
        payload: {
            index,
            coords,
        },
    };
};
