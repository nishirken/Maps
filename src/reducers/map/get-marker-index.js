import { MARKER_INDEX } from 'Constants';

export default (state = { index: -1 }, action) => {
    switch (action.type) {
        case MARKER_INDEX:
            return action.payload;
        default:
            return state;
    }
};
