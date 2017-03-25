import { MARKER_SEARCH } from 'Constants';

export default markerSearchIndexes => {
    return {
        type: MARKER_SEARCH,
        markerSearchIndexes,
    };
};
