export default `
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

  type Query {
    user(id: ID!): User
    users: [User]!
    project(id: ID!): Project
    projects: [Project]!
    card(id: ID!): Card
    cards: [Card]!
  }
`;
