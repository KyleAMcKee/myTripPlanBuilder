const http = require('http');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();

// Log requests to terminal (https://github.com/expressjs/morgan)
app.use(logger('dev'));

// For front end
app.use(express.static('public'));

// Parse requests (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add routes to app
require('./routes')(app);


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to My Trip Plan Builder.'
}));

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port); 