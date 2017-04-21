import { Map, List } from 'immutable';
import { FETCH_MARKERS } from 'Constants';
import { handleAction } from 'redux-actions';

export default handleAction(
    FETCH_MARKERS,
    (state, action) => action.payload,
    Map({
        status: '',
        json: List([]),
        error: null,
    })
);
