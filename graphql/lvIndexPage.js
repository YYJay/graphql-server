import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const got = require('got');

const indexDataType = new GraphQLObjectType({
  name: 'indexData',
  fields: {
    data: {
      type: GraphQLString,
    },
    pageInfo: {
      type: PageInfoType,
    }
  },
});

const dataType = new GraphQLObjectType({
  name: 'indexData',
  fields: {
    app_name: {
      type: GraphQLString,
    },
  },
});

const PageInfoType = new GraphQLObjectType({
  name: 'pageInfo',
  fields: {
    pageNum: {
      type: GraphQLInt,
    },
  },
});

const getUser = async () => {
  const url = 'http://192.169.2.19:38485/dev-services?customizedCategory=3';
  const res = await got(url);
  return res.body;
};

export const lvIndexPage = {
  type: indexDataType,
  resolve(root, params) {
    const data = getUser();
    console.log(data.pageInfo.pageNum);
    return { pageNum: data.pageInfo.pageNum };
  },
};

export default lvIndexPage;
