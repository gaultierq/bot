import { Bot } from './types';
import { getBot, indexBot } from './queries';
import { createBot, deleteBot } from './mutations';

const resolvers = {
  Query: {
    getBot,
    indexBot
  },
  Mutation: {
    createBot,
    deleteBot
  },
  Bot
};

export default resolvers;
