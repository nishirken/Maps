import { MARKER_NAME } from 'Constants';
import { saveReducerValue } from 'Adapters';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case MARKER_NAME:
            value = [
                ...state,
                action.payload,
            ];

            if (NODE_ENV !== 'test')
                saveReducerValue('database', { reducerName: 'getMarkerName', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
