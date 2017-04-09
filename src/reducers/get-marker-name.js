import { MARKER_NAME } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case MARKER_NAME:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
