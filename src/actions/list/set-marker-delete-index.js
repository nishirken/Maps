import { DELETE_MARKER } from 'Constants';

export default deleteMarkerIndex => {
    return {
        type: DELETE_MARKER,
        deleteMarkerIndex,
    };
};
