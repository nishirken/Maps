import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { DELETE_MARKER } from 'Constants';

export default createAction(DELETE_MARKER, index =>
    Map({
        index,
        sendToApi: true,
    }));
