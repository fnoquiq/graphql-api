const { prisma } = require("./../../../../prisma/generated/prisma-client");

function card(parent, args, context, info) {
  return prisma.card({
    id: args.id
  });
}

module.exports = card;
