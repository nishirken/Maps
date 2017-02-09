import { MARKER_CHOICE } from 'Constants';

export default (state = null, action) => {
    switch (action.type) {
        case MARKER_CHOICE:
            return action.payload;
        default:
            return state;
    }
};
