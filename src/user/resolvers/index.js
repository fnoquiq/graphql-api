import user from './queries/user';
import userSearch from './queries/userSearch';
import userById from './queries/userById';

import createUser from './mutations/createUser';

const resolvers = {
  Query: {
    user,
    userSearch,
    userById,
  },
  Mutation: {
    createUser,
  },
};

export default resolvers;
