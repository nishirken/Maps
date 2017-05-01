import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'isomorphic-fetch';

import store from 'Store';
import { StyledMain } from 'Components';
import { MapContainer, ListContainer } from 'Containers';

const App = props => (
    <Provider store={props.store}>
        <StyledMain>
            <MapContainer />
            <ListContainer />
        </StyledMain>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object,
};

if (typeof window !== 'undefined')
    render(
        <AppContainer>
            <App store={store} />
        </AppContainer>,
        document.getElementById('root')
    );

export default App;
