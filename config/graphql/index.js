/**
 * EXTERNAL DEPENDENCIES.
 */
const graphqlHttp = require('express-graphql');

/**
 * INTERNAL DEPENDENCIES.
 */
const graphqlSchema = require('../../src/graphql/schema');
const graphqlResolvers = require('../../src/graphql/resolvers');

const configureGraphql = () => graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
  customFormatErrorFn(err) {
    if ( !err.originalError ) {
      return err;
    }

    const data = err.originalError.data;
    const message = err.message || 'An error occurred.';
    const statusCode = err.originalError.statusCode || 500;

    return { message, statusCode, data };
  }
});

module.exports = configureGraphql;
