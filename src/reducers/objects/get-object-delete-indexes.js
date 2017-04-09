import { DELETE_OBJECT } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case DELETE_OBJECT:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
