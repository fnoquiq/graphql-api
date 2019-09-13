import { GraphQLServer } from 'graphql-yoga';
import PRISMA_CONFIG from '../config/prisma';

import schema from './graphql';

const server = new GraphQLServer({
  schema,
  context: request => ({
    ...request,
    db: PRISMA_CONFIG.db,
    prisma: PRISMA_CONFIG.prisma,
  }),
});

export default server;
