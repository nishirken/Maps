import { List } from 'immutable';
import { handleAction } from 'redux-actions';
import { OBJECTS } from 'Constants';

export default handleAction(
    OBJECTS,
    (state, action) => List([
        ...state,
        action.payload,
    ]),
    []
);
