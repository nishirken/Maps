import { localStorageAppKey, apiUrl } from 'Constants';

const setReducerToLocalStorage = (reducerName, actionValue) => {
    return new Promise(resolve => {
        localStorage.setItem(localStorageAppKey, JSON.stringify({
            ...JSON.parse(localStorage.getItem(localStorageAppKey)),
            [reducerName]: actionValue,
        }));
        if (NODE_ENV === 'development')
            resolve(`Successfully set ${reducerName} to the localStorage`);
    });
};

const saveReducerToDataBase = (reducerName, actionValue) => {
    return fetch(`${apiUrl}save-state`,
        {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                [reducerName]: actionValue,
            }),
        }
    );
};

/**
 * Function saveReducerValue for saving your reducer to
 * database, localStorage or other different way.
 * Then you can get the initial state with this values.
 * @param {string} type - the type of way for saving your reducer.
 * @param {object} options - your values for saving your reducer.
 * @returns {function}
 */
export default (type, options) => {
    switch (type) {
        case 'storage':
            return setReducerToLocalStorage(options.reducerName, options.actionValue);
        case 'database':
            return saveReducerToDataBase(options.reducerName, options.actionValue);
        default:
            return console.warn('You need to specify save reducer type');
    }
};

