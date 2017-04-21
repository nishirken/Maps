import { Map } from 'immutable';
import { createAction } from 'redux-actions';
import { MARKER_NAME } from 'Constants';

export default createAction(MARKER_NAME, (index, name) => Map({ index, name }));
