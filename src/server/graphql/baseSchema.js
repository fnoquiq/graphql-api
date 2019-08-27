const typeDefs = `
  type DateTime {
    date: Date
    time: Time
  }

  scalar Date
  scalar Time
`;

module.exports = typeDefs;
