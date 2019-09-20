import user from './queries/user';
import userSearch from './queries/userSearch';
import userById from './queries/userById';

import createUser from './mutations/createUser';
import login from './mutations/login';
import updateEmail from './mutations/updateEmail';
import updateUser from './mutations/updateUser';

const resolvers = {
  Query: {
    user,
    userSearch,
    userById,
  },
  Mutation: {
    createUser,
    login,
    updateEmail,
    updateUser,
  },
};

export default resolvers;
