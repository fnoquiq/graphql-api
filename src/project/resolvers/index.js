const projectById = require("./querys/projectById");
const projects = require("./querys/projects");

const resolvers = {
  Query: {
    projectById,
    projects
  }
};

module.exports = resolvers;
