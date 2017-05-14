import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { CURRENT_MARKER } from 'Constants';

export default createAction(CURRENT_MARKER, (index, coords) =>
    Map({
        index,
        coords: Map(coords),
    }));
