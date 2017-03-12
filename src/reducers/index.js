import { combineReducers } from 'redux';
import getMarkers from './map/get-markers';
import getCurrentMarker from './map/get-current-marker';
import getMarkerSearchIndexes from './marks-list/get-marker-search-indexes';
import getDeleteMarkerIndexes from './marks-list/get-delete-marker-indexes';
import getNewMarkerName from './marks-list/get-new-marker-name';

export {
    getMarkers,
    getCurrentMarker,
    getMarkerSearchIndexes,
    getDeleteMarkerIndexes,
    getNewMarkerName,
};

export default combineReducers({
    getMarkers,
    getCurrentMarker,
    getMarkerSearchIndexes,
    getDeleteMarkerIndexes,
    getNewMarkerName,
});
