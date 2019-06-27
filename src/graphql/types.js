/**
 * EXTERNAL DEPENDENCIES.
 */
const { mergeTypes } = require('merge-graphql-schemas');

/**
 * TYPES.
 */
const userTypes = require('./user').types;

const types = [
	userTypes
];

module.exports = mergeTypes(types, { all: true });
