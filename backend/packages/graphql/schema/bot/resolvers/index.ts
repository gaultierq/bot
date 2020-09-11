import { Bot } from './types';
import { getBot } from './queries';
import { createBot } from './mutations';

const resolvers = {
  Query: {
    getBot
  },
  Mutation: {
    createBot
  },
  Bot
};

export default resolvers;
