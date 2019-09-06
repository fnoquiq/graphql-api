const projectById = require("./queries/projectById");
const projects = require("./queries/projects");

const resolvers = {
  Query: {
    projectById,
    projects
  }
};

module.exports = resolvers;
