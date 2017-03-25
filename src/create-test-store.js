import { createStore } from 'redux';

import reducers from 'Reducers';

export const saveReducerValue = () => 'test';

export default createStore(reducers, {});
