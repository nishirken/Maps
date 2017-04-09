import { DELETE_MARKER } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case DELETE_MARKER:
            return [
                ...state,
                action.payload.deleteMarkerIndex,
            ];
        default:
            return state;
    }
};
