import { handleAction } from 'redux-actions';
import { MARKER_COORDS } from 'Constants';

export default handleAction(
    MARKER_COORDS,
    (state, action) => [
        ...state,
        action.payload,
    ],
    []
);
