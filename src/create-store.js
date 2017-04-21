import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';

import reducers from 'Reducers';

let store = null;

if (typeof window !== 'undefined') {
    const preloadedState = window.__PRELOADED_STATE__;
    const stateScript = document.getElementById('state');
    const body = document.getElementsByTagName('body');

    body[0].removeChild(stateScript);
    delete window.__PRELOADED_STATE__;

    const configureStore = () => {
        if (NODE_ENV === 'development')
            return createStore(reducers, preloadedState, composeWithDevTools());

        return createStore(reducers, preloadedState);
    };

    store = configureStore();
}

export default store;
