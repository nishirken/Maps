import { handleAction } from 'redux-actions';
import { MARKER_INDEX } from 'Constants';

export default handleAction(
    MARKER_INDEX,
    (state, action) => action.payload,
    { index: -1 }
);
