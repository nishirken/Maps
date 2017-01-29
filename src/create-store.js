import { createStore } from 'redux';
import reducers from './reducers';

const DEVTOLLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, DEVTOLLS);

export default store;
