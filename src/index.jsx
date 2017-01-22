import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import { MainContainer } from 'Containers';

render(
  <MainContainer />,
  document.getElementById('root')
);
