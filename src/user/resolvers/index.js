const user = require("./querys/user");
const userSearch = require("./querys/userSearch");

const resolvers = {
  Query: {
    user,
    userSearch
  }
};

module.exports = resolvers;
