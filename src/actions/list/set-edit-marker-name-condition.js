import { EDIT_MARKER_NAME } from 'Constants';

export default condition => {
    return {
        type: EDIT_MARKER_NAME,
        payload: condition,
    };
};
