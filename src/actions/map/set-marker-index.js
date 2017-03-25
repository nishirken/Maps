import { MARKER_INDEX } from 'Constants';

export default newIndex => {
    return {
        type: MARKER_INDEX,
        payload: newIndex,
    };
};
