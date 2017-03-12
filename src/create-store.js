import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducers from 'Reducers';

const localStorageAppKey = 'MapsTestTask';

export function setReducerToLocalStorage(reducerName, actionValue) {
    return new Promise(resolve => {
        localStorage.setItem(localStorageAppKey, JSON.stringify({
            ...JSON.parse(localStorage.getItem(localStorageAppKey)),
            [reducerName]: actionValue,
        }));
        if (NODE_ENV === 'development')
            resolve(`Successfully set ${reducerName} to the localStorage`);
    });
}

if (!JSON.parse(localStorage.getItem(localStorageAppKey)))
    localStorage.setItem(localStorageAppKey, JSON.stringify({}));

const initialState = JSON.parse(localStorage.getItem(localStorageAppKey));

const store = (_reducers, _initialState) => {
    if (NODE_ENV === 'development')
        return createStore(_reducers, _initialState, applyMiddleware(createLogger()));

    return createStore(_reducers, _initialState);
};

export default store(reducers, initialState);
