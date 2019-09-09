const Binding = require("prisma-binding");
const { prisma } = require("./../prisma/generated/prisma-client");

const env = process.env;
const endpoint = `${env.PRISMA_ENDPOINT}/${env.PRISMA_SERVICE}/${
  env.PRISMA_STAGE
}`;

const PRISMA_CONFIG = {
  db: new Binding.Prisma({
    typeDefs: `${__dirname}/../prisma/generated/graphql-schema/prisma.graphql`,
    endpoint: endpoint
  }),
  prisma
}

module.exports = {
    PRISMA_CONFIG
}