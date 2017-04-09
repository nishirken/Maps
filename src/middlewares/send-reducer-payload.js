import { apiUrl } from 'Constants';

export default () => next => action => {
    const result = next(action);

    if (action.payload.sendToApi) {
        delete action.payload.sendToApi;

        fetch(`${apiUrl}save-state`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return result;
};
