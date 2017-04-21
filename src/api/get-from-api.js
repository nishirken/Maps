import { apiUrlGet } from 'Constants';
import { fetchMarkers } from 'Actions';

export default () => {
    console.log('get from api');
    return dispatch => {
        console.log('dispathing');
        dispatch(fetchMarkers('fetching'));
        console.log('fetching');
        return fetch(apiUrlGet)
            .then(response => response.json())
            .then(json => dispatch(fetchMarkers('success', json)))
            .catch(error => dispatch(fetchMarkers('error', [], error)));
    };
};
