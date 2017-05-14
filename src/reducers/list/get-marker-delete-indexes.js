import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { DELETE_MARKER } from 'Constants';

export default handleAction(
    DELETE_MARKER,
    (state, action) => state.push(action.payload),
    List([])
);
