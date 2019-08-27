const typeDefs = `
  type DateTime {
    date: Date
    time: Time
  }

  scalar Date
  scalar Time

  type Query {
    hello: String!
  }
`;

module.exports = typeDefs;
