const { mergeResolvers } = require('merge-graphql-schemas');

const user = require('../../user/resolvers/');
const project = require('../../project/resolvers/');
const card = require('../../card/resolvers/');

const resolvers = [user, project, card];

const resolversMerged = mergeResolvers(resolvers);

module.exports = resolversMerged;
