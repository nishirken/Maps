import { OBJECTS } from 'Constants';

export default (state = [], action) => {
    switch (action.type) {
        case OBJECTS:
            return [
                ...state,
                action.payload,
            ];
        default:
            return state;
    }
};
