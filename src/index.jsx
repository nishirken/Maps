import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'isomorphic-fetch';

import store from 'Store';
import { StyledMain } from 'Components';
import { AppContainer } from 'Containers';

const App = props => (
    <Provider store={props.store}>
        <StyledMain>
            <AppContainer />
        </StyledMain>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object,
};

if (typeof window !== 'undefined')
    render(
        <App store={store} />,
        document.getElementById('root')
    );

export default App;
