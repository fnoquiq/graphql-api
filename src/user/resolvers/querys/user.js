const { prisma } = require("./../../../../prisma/generated/prisma-client");

function user(parent, args, context, info) {
  return prisma.user({
    id: args.id
  });
}

module.exports = user;
