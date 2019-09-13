import { prisma } from '../../prisma/generated/prisma-client';

const Binding = require('prisma-binding');

const { env } = process;
const endpoint = `${env.PRISMA_ENDPOINT}/${env.PRISMA_SERVICE}/${env.PRISMA_STAGE}`;

const PRISMA_CONFIG = {
  db: new Binding.Prisma({
    typeDefs: `${__dirname}/../../prisma/generated/graphql-schema/prisma.graphql`,
    endpoint,
  }),
  prisma,
};

export default PRISMA_CONFIG;
