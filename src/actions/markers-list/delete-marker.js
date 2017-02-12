import { DELETE_MARKER } from 'Constants';

export default function (deleteMarkerIndex) {
    return {
        type: DELETE_MARKER,
        deleteMarkerIndex,
    };
}
