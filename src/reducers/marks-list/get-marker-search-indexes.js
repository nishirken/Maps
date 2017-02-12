import { FILTER_MARKERS } from 'Constants';
import { setReducerToLocalStorage } from 'Store';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case FILTER_MARKERS:
            value = action.markerSearchIndexes;
            setReducerToLocalStorage('getMarkerSearchIndexes', value);

            return value;
        default:
            return state;
    }
};
