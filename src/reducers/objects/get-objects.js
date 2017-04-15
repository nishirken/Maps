import { handleAction } from 'redux-actions';
import { OBJECTS } from 'Constants';

export default handleAction(
    OBJECTS,
    (state, action) => [
        ...state,
        action.payload,
    ],
    []
);
