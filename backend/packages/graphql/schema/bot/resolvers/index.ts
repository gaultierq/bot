import { Bot } from './types';
import { getBot, indexBot } from './queries';
import { createBot } from './mutations';

const resolvers = {
  Query: {
    getBot,
    indexBot,
  },
  Mutation: {
    createBot
  },
  Bot
};

export default resolvers;
