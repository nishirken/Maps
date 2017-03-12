import { FILTER_MARKERS } from 'Constants';

export default markerSearchIndexes => {
    return {
        type: FILTER_MARKERS,
        markerSearchIndexes,
    };
};
