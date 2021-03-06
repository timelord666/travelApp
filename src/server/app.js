const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');


const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(cors());

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/key', (req, res) => {

    const key = JSON.stringify(process.env.API_KEY);
    res.send(key);
})


app.get('/pickey', (req, res) => {
    const key = JSON.stringify(process.env.API_PIC_KEY);
    res.send(key);
})
// Setup Server

module.exports = app;