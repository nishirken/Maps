import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';

import reducers from 'Reducers';

const localStorageAppKey = 'MapsTestTask';

/*
Save value from reducers
 */

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

export const saveReducerValue = (type, options) => {
    switch (type) {
        case 'storage':
            return setReducerToLocalStorage(options.reducerName, options.actionValue);
        default:
            return console.warn('You need to specify save reducer type');
    }
};

/*
Get the initial state from local storage
 */

if (!JSON.parse(localStorage.getItem(localStorageAppKey)))
    localStorage.setItem(localStorageAppKey, JSON.stringify({}));

const initialState = JSON.parse(localStorage.getItem(localStorageAppKey));

const store = (_reducers, _initialState) => {
    if (NODE_ENV === 'development')
        return createStore(_reducers, _initialState, composeWithDevTools(
            applyMiddleware(createLogger())
        ));

    return createStore(_reducers, _initialState);
};

export default store(reducers, initialState);
