import { MARKER_COORDS } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case MARKER_COORDS:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
