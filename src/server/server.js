const { GraphQLServer } = require("graphql-yoga");
const { PRISMA_CONFIG } = require("./../../config/default")

const schema = require("./graphql/");

const server = new GraphQLServer({
  schema,
  context: request => ({
    ...request,
    db: PRISMA_CONFIG.db,
    prisma: PRISMA_CONFIG.prisma
  })
});

module.exports = { server };
