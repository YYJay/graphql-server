import { ApolloServer } from 'apollo-server';
import schema from './graphql/schema';

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.

const server = new ApolloServer({ schema });

const port = 3007;
server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
