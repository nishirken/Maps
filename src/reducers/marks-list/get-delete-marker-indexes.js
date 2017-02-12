import { DELETE_MARKER } from 'Constants';
import { includes } from 'lodash';
import { setReducerToLocalStorage } from 'Store';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case DELETE_MARKER:
            if (includes(state, action.deleteMarkerIndex)) {
                setReducerToLocalStorage('getDeleteMarkerIndexes', value).then(result => console.log(result));

                return state;
            }
            value = [
                ...state,
                action.deleteMarkerIndex,
            ];
            setReducerToLocalStorage('getDeleteMarkerIndexes', value).then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
