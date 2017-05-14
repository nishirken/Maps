import { fromJS } from 'immutable';
import { createAction } from 'redux-actions';
import { MARKER_COORDS } from 'Constants';

export default createAction(MARKER_COORDS, (index, coords) =>
    fromJS({
        index,
        coords,
        sendToApi: true,
    }));
