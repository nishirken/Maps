import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { OBJECTS } from 'Constants';

export default createAction(OBJECTS, (markerIndex, index, name) =>
    Map({
        markerIndex,
        object: Map({
            index,
            name,
        }),
    }));
