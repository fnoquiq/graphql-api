const { prisma } = require("./../../../../prisma/generated/prisma-client");

function cards(parent, args, context, info) {
  return prisma.cards();
}

module.exports = cards;
