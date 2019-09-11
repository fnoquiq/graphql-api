const { prisma } = require('./../../../../prisma/generated/prisma-client');

function projects(parent, args, context, info) {
  return prisma.projects();
}

module.exports = projects;
