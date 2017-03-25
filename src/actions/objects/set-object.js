import { OBJECTS } from 'Constants';

export default (markerIndex, index, name) => {
    return {
        type: OBJECTS,
        payload: {
            markerIndex,
            object: {
                index,
                name,
            },
        },
    };
};
