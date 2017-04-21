import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { MARKER_COORDS } from 'Constants';

export default handleAction(
    MARKER_COORDS,
    (state, action) => List([
        ...state,
        action.payload,
    ]),
    []
);
