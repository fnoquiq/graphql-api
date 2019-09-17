import user from './queries/user';
import userSearch from './queries/userSearch';
import userById from './queries/userById';

import createUser from './mutations/createUser';
import login from './mutations/login';

const resolvers = {
  Query: {
    user,
    userSearch,
    userById,
  },
  Mutation: {
    createUser,
    login,
  },
};

export default resolvers;
