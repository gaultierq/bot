import { GraphQLSchema } from 'graphql';
import { join } from 'path';
import flatten from 'lodash/flatten';
import { mergeResolvers, mergeTypeDefs, makeExecutableSchema, loadFilesSync } from 'graphql-tools';

import { userResolvers } from './user';
import { postResolvers } from './post';
import { botResolvers } from './bot';
import { interactionResolvers } from './interaction';
import { answerResolvers } from './answer';
import { conversationResolvers } from './conversation';

const resolvers = mergeResolvers([
  userResolvers,
  postResolvers,
  botResolvers,
  interactionResolvers,
  answerResolvers,
  conversationResolvers
]);

const types = loadFilesSync(join(__dirname, './**/types.graphql'));
const queries = loadFilesSync(join(__dirname, './**/queries.graphql'));
const mutations = loadFilesSync(join(__dirname, './**/mutations.graphql'));

const typeDefs = mergeTypeDefs(flatten([types, queries, mutations]));

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
