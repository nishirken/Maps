import { createAction } from 'redux-actions';
import { MARKER_INDEX } from 'Constants';

export default createAction(MARKER_INDEX, index => {
    return {
        index,
        sendToApi: true,
    };
});
