import { MARKER_SEARCH } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case MARKER_SEARCH:
            return action.markerSearchIndexes || state;
        default:
            return state;
    }
};
