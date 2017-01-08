import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { DrawFieldContainer } from './containers';
import './index.stylus';

render(
  <Provider>
    <DrawFieldContainer />
  </Provider>,
  document.getElementById('root')
);
