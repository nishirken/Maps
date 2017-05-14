import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { OBJECTS } from 'Constants';

export default handleAction(
    OBJECTS,
    (state, action) => state.push(action.payload),
    List([])
);
