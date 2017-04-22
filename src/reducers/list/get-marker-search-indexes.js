import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { MARKER_SEARCH } from 'Constants';

export default handleAction(
    MARKER_SEARCH,
    (state, action) => List(action.payload),
    List([])
);
