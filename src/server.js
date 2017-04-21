import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './index';
import { createStore } from 'redux';
import request from 'request-promise-native';
import { Map, List, fromJS } from 'immutable';

import reducers from 'Reducers';
import { fetchMarkers } from 'Actions';

const app = new Koa();

const renderHTML = (componentHTML, preloadedState) => `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Maps</title>
        <link rel="stylesheet" href="/global-styles.css">
        <link rel="icon" href="/favicon.png" />
    </head>
    <body>
    <div id="root">${componentHTML}</div>
    <script id="state">
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/common.js"></script>
    <script src="/main.js"></script>
    </body>
    </html>
`;

const fetchFromApi = async () => {
    try {
        const result = await request({
            uri: 'http://nginx/get-state',
            method: 'POST',
        });

        return Map({
            status: 'success',
            json: fromJS(JSON.parse(result)),
            error: null,
        });
    } catch (error) {
        console.error('There are some error with fetching from api: ', error.message);

        return Map({
            status: 'error',
            json: List([]),
            error,
        });
    }
};

app.use(async ctx => {
    const serverStore = createStore(reducers);
    const result = await fetchFromApi();

    serverStore.dispatch(fetchMarkers(result));

    const preloadedState = serverStore.getState();

    ctx.body = renderHTML(
        renderToString(<App store={serverStore} />),
        { fetchMarkers: preloadedState.fetchMarkers }
    );
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
