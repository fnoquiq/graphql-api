const { mergeResolvers } = require("merge-graphql-schemas");

const user = require("../../user/resolvers/");
const card = require("../../card/resolvers/");

const resolvers = [user, card];

const resolversMerged = mergeResolvers(resolvers);

module.exports = resolversMerged;
