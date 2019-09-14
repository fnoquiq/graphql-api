import { mergeResolvers } from 'merge-graphql-schemas';

import user from '../../user/resolvers';
import project from '../../project/resolvers';
import card from '../../card/resolvers';

const resolvers = [user, project, card];

const resolversMerged = mergeResolvers(resolvers);

export default resolversMerged;
