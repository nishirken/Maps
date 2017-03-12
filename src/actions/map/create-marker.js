import { CREATE_MARKER } from 'Constants';

export default (coords, name, index) => {
    return {
        type: CREATE_MARKER,
        payload: {
            name,
            coords,
            index,
        },
    };
};
