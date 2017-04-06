import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';

import reducers from 'Reducers';

/*
Get the initial state from local storage
 */

const store = (_reducers, _initialState) => {
    if (NODE_ENV === 'development')
        return createStore(_reducers, _initialState, composeWithDevTools(
            applyMiddleware(createLogger())
        ));

    return createStore(_reducers, _initialState);
};

export default store(reducers);
