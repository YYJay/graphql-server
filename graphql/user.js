const got = require('got')

const getUser = async(root, parames) => {
  const { username, password } = parames
  const options = {
    mode: 'no-cors',
    json: true,
    body: {
      password,
      username,
    },
  }
  const url = `http://192.169.2.19:35434/iam/actions/login`
  const res = await got.post(url, options)
  const { token } = res.body
  return res.body
}

export const User = `
  extend type Query {
    user(username: String!, password: String! ): User
  }
  type User {
    token: String
  }
`;



export const userResolvers = {
  Query: {
    user: getUser,
  },
};
