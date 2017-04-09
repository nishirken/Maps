import { createAction } from 'redux-actions';
import { MARKER_COORDS } from 'Constants';

export default createAction(MARKER_COORDS, (index, coords) => {
    return {
        index,
        coords,
        sendToApi: true,
    };
});
