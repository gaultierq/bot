import { Conversation } from './types';
import { getConversation, nextInteraction } from './queries';
import { createConversation } from './mutations';

const resolvers = {
  Query: {
    getConversation,
    nextInteraction,
  },
  Mutation: {
    createConversation
  },
  Conversation
};

export default resolvers;
