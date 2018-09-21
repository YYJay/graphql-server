
import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
// 引入 type
import { users } from './user';

// 建立 schema
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      users,
    },
  }),
});
