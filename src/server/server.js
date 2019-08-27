const { GraphQLServer } = require("graphql-yoga");
const Binding = require("prisma-binding");
const { prisma } = require("./../../prisma/generated/prisma-client");

const schema = require("./graphql/");

const env = process.env;
const endpoint = `${env.PRISMA_ENDPOINT}/${env.PRISMA_SERVICE}/${
  env.PRISMA_STAGE
}`;

const server = new GraphQLServer({
  schema,
  context: request => ({
    ...request,
    db: new Binding.Prisma({
      typeDefs: `${__dirname}/../../prisma/generated/graphql-schema/prisma.graphql`,
      endpoint: endpoint
    }),
    prisma
  })
});

module.exports = { server };
