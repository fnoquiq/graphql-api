const typeDefs = `
  type Card {
    id: ID!
    name: String!
    responsible: [User]!
    sector: [Sector]!
    requirement: [Card]!
    description: String
    complexity: Complexity!
    priority: Priority!
    status: Status!
    delivery_date: DateTime
    created_at: DateTime!
    updated_at: DateTime!
  }

  enum Sector {
    BACK_END
    FRONT_END
    DESIGN
  }

  enum Complexity {
    HARD
    MEDIUM
    EASY
  }

  enum Priority {
    HIGH
    MEDIUM
    LOW
  }

  type Query {
    """
    Através de um id é possivel buscar um card.
    """
    cardById(id: ID!): Card
  }
`;

export default typeDefs;
