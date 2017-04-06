import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import store from 'Store';
import { StyledMain } from 'Components';
import { ListContainer, MapContainer } from 'Containers';

const App = () => (
    <Provider store={store}>
        <StyledMain>
            <MapContainer />
            <ListContainer />
        </StyledMain>
    </Provider>
);

if (typeof window !== 'undefined')
    render(
        <App />,
        document.getElementById('root')
    );

export default App;
