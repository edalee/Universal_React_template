import path from 'path';
import express from 'express';

const app = express();

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.get('/', (req, res) => {
    console.log(publicPath);
    app.use(publicPath);
    res.sendFile(indexPath);
});

export default app;
