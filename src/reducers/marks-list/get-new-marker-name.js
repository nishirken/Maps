import { NEW_MARKER_NAME } from 'Constants';
import { setReducerToLocalStorage } from 'Store';
import { findLastIndex } from 'lodash';

export default (state = [], action) => {
    let value = [];
    let lastNewMarkerNameIndex = -1;

    switch (action.type) {
        case NEW_MARKER_NAME:
            lastNewMarkerNameIndex = findLastIndex(state, { markerIndex: action.payload.markerIndex });

            if (lastNewMarkerNameIndex !== -1) {
                value = state;
                state[lastNewMarkerNameIndex] = action.payload;
            } else
                value = [
                    ...state,
                    action.payload,
                ];

            setReducerToLocalStorage('getNewMarkerName', value).then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
