import { CREATE_MARKER } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_MARKER:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
