const { mergeTypes } = require('merge-graphql-schemas');

const baseSchema = require('./baseSchema');
const userSchema = require('../../user/typeDefs');
const projectSchema = require('../../project/typeDefs');
const cardSchema = require('../../card/typeDefs');

const typeDefs = [baseSchema, userSchema, projectSchema, cardSchema];
const schema = mergeTypes(typeDefs, { all: true });

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
module.exports = schema;
