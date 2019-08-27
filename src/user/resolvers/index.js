const user = require("./querys/user");
const users = require("./querys/users");

const resolvers = {
  Query: {
    user,
    users
  }
};

module.exports = resolvers;
