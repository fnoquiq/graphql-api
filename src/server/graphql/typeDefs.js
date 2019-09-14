import { mergeTypes } from 'merge-graphql-schemas';

import baseSchema from './baseSchema';
import userSchema from '../../user/typeDefs';
import projectSchema from '../../project/typeDefs';
import cardSchema from '../../card/typeDefs';

const typeDefs = [baseSchema, userSchema, projectSchema, cardSchema];
const schema = mergeTypes(typeDefs, { all: true });

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default schema;
