import { DELETE_OBJECT } from 'Constants';
import { saveReducerValue } from 'Store';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case DELETE_OBJECT:
            value = [
                ...state,
                action.payload,
            ];

            if (NODE_ENV !== 'test')
                saveReducerValue('storage', { reducerName: 'getObjectDeleteIndexes', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
