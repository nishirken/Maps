import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './index';

const app = new Koa();

const renderHTML = componentHTML => `
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
    <script src="/common.js"></script>
    <script src="/main.js"></script>
    </body>
    </html>
`;

app.use(ctx => {
    ctx.body = renderHTML(renderToString(<App />));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
