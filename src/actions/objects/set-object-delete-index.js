import { DELETE_OBJECT } from 'Constants';

export default (markerIndex, index) => {
    return {
        type: DELETE_OBJECT,
        payload: {
            markerIndex,
            index,
        },
    };
};
