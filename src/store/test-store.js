import configureStore from 'redux-mock-store';
import initialState from './test-initial-state';

const mockStore = configureStore();
const store = mockStore(initialState.toObject());

export default store;
