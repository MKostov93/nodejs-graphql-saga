/**
 * INITIALIZE.
 */
const resolvers = {
  exampleSignInResolver: async ({ email, password }) => {
    return { message: 'Example Sign In Message' };
  }
}

module.exports = resolvers;
