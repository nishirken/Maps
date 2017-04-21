import { combineReducers } from 'redux';
import getMarkerIndex from './map/get-marker-index';
import getMarkerCoords from './map/get-marker-coords';
import getMarkerName from './get-marker-name';
import getCurrentMarker from './get-current-marker';
import getMarkerSearchIndexes from './list/get-marker-search-indexes';
import getMarkerDeleteIndexes from './list/get-marker-delete-indexes';
import getObjects from './objects/get-objects';
import getObjectDeleteIndexes from './objects/get-object-delete-indexes';
import fetchMarkers from './fetch-markers';

export {
    getMarkerIndex,
    getMarkerCoords,
    getMarkerName,
    getCurrentMarker,
    getMarkerSearchIndexes,
    getMarkerDeleteIndexes,
    getObjects,
    getObjectDeleteIndexes,
    fetchMarkers,
};

export default combineReducers({
    getMarkerIndex,
    getMarkerCoords,
    getMarkerName,
    getCurrentMarker,
    getMarkerSearchIndexes,
    getMarkerDeleteIndexes,
    getObjects,
    getObjectDeleteIndexes,
    fetchMarkers,
});
