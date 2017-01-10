import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import { MapContainer } from './containers';
import { ListsBlockContainer } from './containers';
import './common-styles/index.styl';

render(
  <Provider>
    <main className="main">
      <MapContainer/>
      <ListsBlockContainer/>
    </main>
  </Provider>,
  document.getElementById('root')
);
