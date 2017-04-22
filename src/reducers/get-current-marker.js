import { handleAction } from 'redux-actions';
import { Map } from 'immutable';
import { CURRENT_MARKER } from 'Constants';

export default handleAction(
    CURRENT_MARKER,
    (state, action) => action.payload,
    Map({
        index: null,
        coords: Map({}),
    })
);
