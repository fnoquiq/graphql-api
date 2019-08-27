const { mergeResolvers } = require("merge-graphql-schemas");

const user = require("../../user/resolvers/");

const resolvers = [user];

const resolversMerged = mergeResolvers(resolvers);

module.exports = resolversMerged;
