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
    '''
    Retorna o usuário logado
    '''
    user(): User
    '''
    Através de uma String é possivel procurar usuários pelo first_name, username, email, phone
    '''
    userSearch(query: String!): [User]!
  }


`;

module.exports = typeDefs;
