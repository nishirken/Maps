import { DELETE_MARKER } from 'Constants';
import { saveReducerValue } from 'Adapters';

export default (state = [], action) => {
    let value = state;

    switch (action.type) {
        case DELETE_MARKER:
            value = [
                ...state,
                action.deleteMarkerIndex,
            ];

            if (NODE_ENV !== 'test')
                saveReducerValue('database', { reducerName: 'getMarkerDeleteIndexes', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
