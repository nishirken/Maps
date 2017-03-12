import { NEW_MARKER_NAME } from 'Constants';
import { setReducerToLocalStorage } from 'Store';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case NEW_MARKER_NAME:
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
