const typeDefs = `
  type User {
    id: ID!
    first_name: String!
    last_name: String
    username: String!
    email: [String!]!
    phone: [String]!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    user(): User
    users: [User]!
  }


`;

module.exports = typeDefs;
