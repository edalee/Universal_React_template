import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../shared/App';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get( '*', (req, res) => {
    res.send(`
        <!doctype html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>SSR</title>
            <meta name="description" content="The HTML5 Herald">
            <meta name="author" content="SitePoint">
        </head>

        <body>
            <div id="root">${renderToString(<App />)}</div>
            <script src="/dist/client.js"></script>
        </body>
        </html>
    `);
});

app.listen( port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
