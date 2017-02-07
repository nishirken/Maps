import { createStore } from 'redux';
import reducers from 'Reducers';

const DEVTOLLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = (_reducers, _DEVTOOLS) => {
    if (NODE_ENV === 'development')
        return createStore(_reducers, _DEVTOOLS);

    return createStore(_reducers);
};

export default store(reducers, DEVTOLLS);
