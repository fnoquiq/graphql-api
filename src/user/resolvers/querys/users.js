const { prisma } = require("./../../../../prisma/generated/prisma-client");

function users(parent, args, context, info) {
  return prisma.users();
}

module.exports = users;
