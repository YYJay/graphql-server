import { ApolloServer } from 'apollo-server';
import schema from './graphql/schema';

const server = new ApolloServer({ schema });

const port = 3007;
server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
