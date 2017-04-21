import { apiUrlSend } from 'Constants';

export default (infoType, info) =>
    fetch(apiUrlSend, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ infoType, info }),
    });
