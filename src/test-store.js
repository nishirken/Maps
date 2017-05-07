import configureStore from 'redux-mock-store';
import initialState from 'InitialState';

const mockStore = configureStore();
const store = mockStore(initialState.toObject());

export default store;
