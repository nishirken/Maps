import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sendReducerPayload } from 'Middlewares';
import createLogger from 'redux-logger';

import reducers from 'Reducers';

/*
 Get the initial state from local storage
 */

const configureStore = () => {
    if (NODE_ENV === 'development')
        return createStore(reducers, composeWithDevTools(
            applyMiddleware(
                createLogger(),
                sendReducerPayload,
            )
        ));

    return createStore(reducers);
};

export default configureStore;
