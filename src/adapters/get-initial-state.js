import { apiUrl, localStorageAppKey, localStorageConst } from 'Constants';

const getStateFromLocalStorage = new Promise(resolve => {
    const initialState = JSON.parse(localStorageConst.getItem(localStorageAppKey));

    if (!initialState) {
        localStorageConst.setItem(localStorageAppKey, JSON.stringify({}));
        resolve({});
    }

    resolve(initialState);
});

const getStateFromDataBase = () => fetch(`${apiUrl}get-state/state.json`);

/**
 * Function getInitialState for getting your initial state
 * from database, localStorage or other different way.
 * @param {string} type - the type of way for getting your reducer.
 * @return {function}
 */
export default type => {
    switch (type) {
        case 'storage':
            return getStateFromLocalStorage();
        case 'database':
            return getStateFromDataBase();
    }
};
