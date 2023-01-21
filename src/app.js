require('./config/db');

const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

//create server app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.send('We are on home');
});

module.exports = app;
