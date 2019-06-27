const typeDefs = `
	type User {
		_id: ID!
		name: String!
		email: String!
		password: String
	}

	type AuthData {
		message: String!
	}

	input UserInput {
		email: String!
		password: String!
	}

	type Query {
		exampleSignInResolver(userInput: UserInput): AuthData!
	}
`;

module.exports = typeDefs;
