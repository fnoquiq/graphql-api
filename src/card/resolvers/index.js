const cardById = require('./queries/cardById');

const resolvers = {
  Query: {
    cardById,
  },
};

module.exports = resolvers;
