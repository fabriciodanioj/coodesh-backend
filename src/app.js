require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongo = require('./config/mongo');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan(process.env.LOG_PATTERN || 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./routes')(app);

mongo.connect();

module.exports = app;
