import { handleAction } from 'redux-actions';
import { DELETE_OBJECT } from 'Constants';

export default handleAction(
    DELETE_OBJECT,
    (state, action) => [
        ...state,
        action.payload,
    ],
    []
);
