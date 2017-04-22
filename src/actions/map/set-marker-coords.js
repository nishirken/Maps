import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { MARKER_COORDS } from 'Constants';

export default createAction(MARKER_COORDS, (index, coords) =>
    Map({
        index,
        coords: Map(coords),
    }));
