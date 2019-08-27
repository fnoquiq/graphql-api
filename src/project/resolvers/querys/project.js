const { prisma } = require("./../../../../prisma/generated/prisma-client");

function project(parent, args, context, info) {
  return prisma.project({
    id: args.id
  });
}

module.exports = project;
