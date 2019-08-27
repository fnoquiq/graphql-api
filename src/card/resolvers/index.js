const card = require("./querys/card");
const cards = require("./querys/cards");

const resolvers = {
  Query: {
    card,
    cards
  }
};

module.exports = resolvers;
