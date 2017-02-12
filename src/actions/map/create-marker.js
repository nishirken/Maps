import { CREATE_MARKER } from 'Constants';

export default (coords, name, markerIndex) => {
    return {
        type: CREATE_MARKER,
        payload: {
            name,
            coords,
            markerIndex,
        },
    };
};
