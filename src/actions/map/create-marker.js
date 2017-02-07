import { CREATE_MARKER } from 'Constants';

export default function (coords, name) {
    return {
        type: CREATE_MARKER,
        payload: {
            name,
            coords,
        },
    };
}
