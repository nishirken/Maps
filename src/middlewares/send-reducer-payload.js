import { apiUrl, sendPath } from 'Constants';
import { Map, List } from 'immutable';

export const checkEnvironment = action => {
    if (typeof window !== 'undefined' && (Map.isMap(action.payload) || List.isList(action.payload)))
        if (action.payload.get('sendToApi'))
            return true;
};

export default () => next => action => {
    const result = next(action);

    if (checkEnvironment(action)) {
        const newPayload = action.payload.remove('sendToApi');

        fetch(`${apiUrl}${sendPath}`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: action.type,
                payload: newPayload,
            }),
        })
            .then(response => response)
            .catch(error => error);
    }

    return result;
};
