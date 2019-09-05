const typeDefs = `
  type Project {
    id: ID!
    name: String!
    owner: User!
    collaborators: [CollaboratorsPermissions]!
    status: [Status!]!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type Status {
    id: ID!
    name: String!
    cards: [Card]!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type CollaboratorsPermissions {
    user: User!
    permissions: [Permission]!
    created_at: DateTime!
    updated_at: DateTime!
  }

  enum Permission {
    CREATE_CARDS
    UPDATE_CARDS
    DELETE_CARDS
    CREATE_COLLABORATORS
    UPDATE_COLLABORATORS
    DELETE_COLLABORATORS
  }

  type Query {
    """
    Através de um id é possivel buscar um projeto.
    """
    projectById(id: ID!): Project
    """
    Retorna uma lista de projetos pertecentes ao usuário logado
    """
    projects: [Project]!
  }
`;

module.exports = typeDefs;
