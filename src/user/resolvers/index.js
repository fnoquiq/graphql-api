import user from './queries/user';
import userSearch from './queries/userSearch';
import userById from './queries/userById';

const resolvers = {
  Query: {
    user,
    userSearch,
    userById,
  },
};

export default resolvers;
