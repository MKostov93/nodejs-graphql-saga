/**
 * EXTERNAL DEPENDENCIES.
 */
const { buildSchema } = require('graphql');

/**
 * INTERNAL DEPENDENCIES.
 */
const typeDefs = require('./types');

module.exports = buildSchema(typeDefs);
