import { MARKER_INDEX } from 'Constants';
import { saveReducerValue } from 'Adapters';

export default (state = -1, action) => {
    let value = state;

    switch (action.type) {
        case MARKER_INDEX:
            value = action.payload;

            if (NODE_ENV !== 'test')
                saveReducerValue('database', { reducerName: 'getMarkerIndex', actionValue: value })
                    .then(result => console.log(result));

            return value;
        default:
            return state;
    }
};
