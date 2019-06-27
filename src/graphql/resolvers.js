/**
 * EXTERNAL DEPENDENCIES.
 */
const { mergeResolvers } = require('merge-graphql-schemas');

/**
 * RESOLVERS.
 */
const userResolvers = require('./user').resolvers;

const resolvers = [
	userResolvers
];

module.exports = mergeResolvers(resolvers);
