import { Conversation } from './types';
import { getConversation } from './queries';
import { createConversation } from './mutations';

const resolvers = {
  Query: {
    getConversation
  },
  Mutation: {
    createConversation
  },
  Conversation
};

export default resolvers;
