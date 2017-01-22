import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import { Main } from 'Containers';

render(
  <Main/>,
  document.getElementById('root')
);
