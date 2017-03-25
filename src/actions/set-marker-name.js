import { MARKER_NAME } from 'Constants';

export default (index, name) => {
    return {
        type: MARKER_NAME,
        payload: {
            index,
            name,
        },
    };
};
