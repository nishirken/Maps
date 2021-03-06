import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { MARKER_NAME } from 'Constants';

export default handleAction(
    MARKER_NAME,
    (state, action) => state.push(action.payload),
    List([])
);
