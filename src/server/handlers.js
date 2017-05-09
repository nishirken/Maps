import request from 'request-promise-native';
import { List, fromJS } from 'immutable';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../index';
import { createStore, applyMiddleware } from 'redux';

import { sendReducerPayload } from 'Middlewares';
import reducers from 'Reducers';
import {
    setMarkerIndex,
    setMarkerCoords,
    setMarkerName,
    setObject,
} from 'Actions';

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

export const fetchFromApi = async () => {
    try {
        const result = await request({
            uri: 'http://nginx/get-state',
            method: 'POST',
        });

        return fromJS(JSON.parse(result));
    } catch (error) {
        if (NODE_ENV === 'development')
            console.error('There are some error with fetching from api: ', error.message);

        return List([]);
    }
};

export const serverStoreDispatch = (markers, serverStore) => {
    markers.forEach(marker => {
        const index = marker.get('index');

        serverStore.dispatch(setMarkerIndex(index));
        serverStore.dispatch(setMarkerName(index, marker.get('name')));
        serverStore.dispatch(setMarkerCoords(index, marker.get('coords')));
        marker.get('objects').forEach(object =>
            serverStore.dispatch(setObject(index, object.get('index'), object.get('name'))));
    });
};

export const handler = async ctx => {
    const serverStore = createStore(reducers, {}, applyMiddleware(sendReducerPayload));
    const markers = await fetchFromApi();

    if (markers.size)
        serverStoreDispatch(markers, serverStore);

    const preloadedState = serverStore.getState();

    ctx.body = renderHTML(renderToString(<App store={serverStore} />), preloadedState);
};

