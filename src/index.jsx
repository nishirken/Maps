import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import store from 'Store';
import { StyledMain } from 'Components';
import { ListContainer, MapContainer } from 'Containers';

if (NODE_ENV !== 'test')
    render(
        <Provider store={store}>
            <StyledMain>
                <MapContainer />
                <ListContainer />
            </StyledMain>
        </Provider>,
        document.getElementById('root')
    );
