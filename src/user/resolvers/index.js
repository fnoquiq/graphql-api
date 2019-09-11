const user = require('./queries/user');
const userSearch = require('./queries/userSearch');
const userById = require('./queries/userById');

const resolvers = {
  Query: {
    user,
    userSearch,
    userById,
  },
};

module.exports = resolvers;
