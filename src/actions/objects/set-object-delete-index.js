import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { DELETE_OBJECT } from 'Constants';

export default createAction(DELETE_OBJECT, (markerIndex, index) =>
    Map({
        markerIndex,
        index,
    }));
