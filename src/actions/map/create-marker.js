import { CREATE_MARKER } from 'Constants';

export default (coords, name) => {
    return {
        type: CREATE_MARKER,
        payload: {
            name,
            coords,
        },
    };
};
