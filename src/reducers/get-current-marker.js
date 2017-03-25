import { CURRENT_MARKER } from 'Constants';

export default (state = null, action) => {
    switch (action.type) {
        case CURRENT_MARKER:
            return action.payload || state;
        default:
            return state;
    }
};
