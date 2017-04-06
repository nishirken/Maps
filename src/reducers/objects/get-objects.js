import { OBJECTS } from 'Constants';
import { saveReducerValue } from 'Adapters';

export default (state = [], action) => {
    let value = [];

    switch (action.type) {
        case OBJECTS:
            value = [
                ...state,
                action.payload,
            ];

            if (NODE_ENV !== 'test')
                saveReducerValue('database', { reducerName: 'getObjects', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
