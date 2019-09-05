const cardById = require("./querys/cardById");

const resolvers = {
  Query: {
    cardById
  }
};

module.exports = resolvers;
