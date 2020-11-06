const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type User {
    id: ID!
    email: String!
    name: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    email: String!
    name: String!
    password: String!
  }

  type RootQuery {
    users: [User!]!
  }

  type RootMutation {
    createUser(userInput: UserInput):User
  }

  schema {
      query: RootQuery,
      mutation: RootMutation
  }
`)

module.exports = schema