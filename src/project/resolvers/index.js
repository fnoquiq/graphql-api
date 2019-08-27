const project = require("./querys/project");
const projects = require("./querys/projects");

const resolvers = {
  Query: {
    project,
    projects
  }
};

module.exports = resolvers;
