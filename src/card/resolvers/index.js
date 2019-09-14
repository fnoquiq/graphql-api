import cardById from './queries/cardById';

const resolvers = {
  Query: {
    cardById,
  },
};

export default resolvers;
