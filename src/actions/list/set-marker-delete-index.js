import { createAction } from 'redux-actions';
import { DELETE_MARKER } from 'Constants';

export default createAction(DELETE_MARKER, deleteMarkerIndex => {
    return {
        deleteMarkerIndex,
        sendToApi: true,
    };
});
