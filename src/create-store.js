import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';

import { sendReducerPayload } from 'Middlewares';
import reducers from 'Reducers';

let store = null;

if (typeof window !== 'undefined') {
    const preloadedState = window.__PRELOADED_STATE__;
    const stateScript = document.getElementById('state');
    const body = document.getElementsByTagName('body');
    const initialState = {};

    if (preloadedState) {
        delete window.__PRELOADED_STATE__;
        Object.keys(preloadedState).forEach(reducer => {
            initialState[reducer] = fromJS(preloadedState[reducer]);
        });
    }

    if (stateScript)
        body[0].removeChild(stateScript);

    const configureStore = () => {
        if (NODE_ENV === 'development')
            return createStore(reducers, initialState, composeWithDevTools(
                applyMiddleware(sendReducerPayload)
            ));

        return createStore(reducers, initialState, applyMiddleware(sendReducerPayload));
    };

    store = configureStore();
}

export default store;
