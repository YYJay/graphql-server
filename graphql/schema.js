import { merge } from 'lodash';
import {makeExecutableSchema} from 'apollo-server'
import { Author, authorResolvers } from './demo.js';
import { User, userResolvers } from './user.js';
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`;
const resolvers = {};
export default makeExecutableSchema({
  typeDefs: [ Query, Author, User ],
  resolvers: merge(resolvers, authorResolvers, userResolvers),
});
