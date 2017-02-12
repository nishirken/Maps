import { MARKER_CHOICE } from 'Constants';
import { setReducerToLocalStorage } from 'Store';

export default (state = null, action) => {
    let value = state;

    switch (action.type) {
        case MARKER_CHOICE:
            value = action.payload;
            setReducerToLocalStorage('getCurrentMarker', value).then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
