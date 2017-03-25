import { CURRENT_MARKER } from 'Constants';

export default (index, coords) => {
    return {
        type: CURRENT_MARKER,
        payload: {
            index,
            coords,
        },
    };
};
