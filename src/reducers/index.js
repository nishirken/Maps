import { combineReducers } from 'redux';
import getMarkers from './map/get-markers';

export { getMarkers };

export default combineReducers({
    getMarkers,
});
