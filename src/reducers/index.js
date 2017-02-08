import { combineReducers } from 'redux';
import getMarkers from './map/get-markers';
import getCurrentMarker from './map/get-current-marker';

export { getMarkers };

export default combineReducers({
    getMarkers,
    getCurrentMarker,
});
