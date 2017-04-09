import { createAction } from 'redux-actions';
import { DELETE_OBJECT } from 'Constants';

export default createAction(DELETE_OBJECT, (markerIndex, index) => {
    return {
        markerIndex,
        index,
        sendToApi: true,
    };
});
