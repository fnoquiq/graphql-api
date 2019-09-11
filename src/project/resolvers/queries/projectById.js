const { prisma } = require('./../../../../prisma/generated/prisma-client');

function projectById(parent, args, context, info) {
  return prisma.project({
    id: args.id,
  });
}

module.exports = projectById;
