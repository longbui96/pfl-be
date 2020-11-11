require('dotenv').config();

import express from 'express';

const app = express();
const { port = 3000 } = process.env;

app.get('/', (req, res) => {
    res.send(`Welcome to Long Bui's Site!`)
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});