import projectById from './queries/projectById';
import projects from './queries/projects';

const resolvers = {
  Query: {
    projectById,
    projects,
  },
};

export default resolvers;
