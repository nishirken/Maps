import { CREATE_MARKER } from 'Constants';
import { setReducerToLocalStorage } from 'Store';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case CREATE_MARKER:
            value = [
                ...state,
                {
                    ...action.payload,
                    index: state.length,
                },
            ];
            setReducerToLocalStorage('getMarkers', value).then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
