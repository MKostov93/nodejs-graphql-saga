/**
 * EXTERNAL DEPENDENCIES.
 */
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dotenv = require('dotenv').config();

/**
 * INTERNAL DEPENDENCIES.
 */
const config = require('./config/environments');
const connectToDB = require('./config/database');
const configureGraphql = require('./config/graphql/index');

/**
 * UTILS.
 */
const constructPath = require('./src/utils/constructPath');

/**
 * MIDDLEWARE.
 */
const setResponseAccessHeaders = require('./src/middleware/setResponseAccessHeaders');
const errorHandler = require('./src/middleware/errorHandler');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
connectToDB();

/**
 * Express configuration.
 */
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(constructPath(['src', 'public'])));
app.use(setResponseAccessHeaders(config.host));

/**
 * Configure GraphQL.
 */
app.use('/graphql', configureGraphql());

/**
 * Error Handler.
 */
app.use(errorHandler);

/**
 * Start Express server.
 */
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));
