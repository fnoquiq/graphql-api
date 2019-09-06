const user = require("./queries/user");
const userSearch = require("./queries/userSearch");

const resolvers = {
  Query: {
    user,
    userSearch
  }
};

module.exports = resolvers;
