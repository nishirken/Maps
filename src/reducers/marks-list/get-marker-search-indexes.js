import { FILTER_MARKERS } from 'Constants';
import { setReducerToLocalStorage } from 'Store';

export default (state = [], action) => {
    switch (action.type) {
        case FILTER_MARKERS:
            return action.markerSearchIndexes;
        default:
            return state;
    }
};
