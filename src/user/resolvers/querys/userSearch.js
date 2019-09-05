const { prisma } = require("./../../../../prisma/generated/prisma-client");

function userSearch(parent, args, context, info) {
  return prisma.users();
}

module.exports = users;
