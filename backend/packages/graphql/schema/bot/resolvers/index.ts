import { Bot } from './types';
import { getBot, indexBot } from './queries';
import { createBot, deleteBot, editBot } from './mutations';

const resolvers = {
  Query: {
    getBot,
    indexBot
  },
  Mutation: {
    createBot,
    editBot,
    deleteBot
  },
  Bot
};

export default resolvers;
