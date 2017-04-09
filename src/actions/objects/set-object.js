import { createAction } from 'redux-actions';
import { OBJECTS } from 'Constants';

export default createAction(OBJECTS, (markerIndex, index, name) => {
    return {
        markerIndex,
        object: {
            index,
            name,
        },
        sendToApi: true,
    };
});
