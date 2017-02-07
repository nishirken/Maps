import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import store from 'Store';
import { StyledMain } from 'Components';
import { MarksListContainer, MapContainer } from 'Containers';

render(
    <Provider store={store}>
        <StyledMain>
            <MapContainer />
            <MarksListContainer />
        </StyledMain>
    </Provider>,
    document.getElementById('root')
);
