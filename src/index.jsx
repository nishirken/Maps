import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import { Main } from './containers';

render(
  <Provider>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
