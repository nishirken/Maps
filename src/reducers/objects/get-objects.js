import { OBJECTS } from 'Constants';
import { saveReducerValue } from 'Store';

export default (state = [], action) => {
    let value = [];

    switch (action.type) {
        case OBJECTS:
            value = [
                ...state,
                action.payload,
            ];

            if (NODE_ENV !== 'test')
                saveReducerValue('storage', { reducerName: 'getObjects', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
