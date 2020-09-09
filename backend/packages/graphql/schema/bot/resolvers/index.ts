import { Bot } from './types';
import { getBot } from './queries';

const resolvers = {
  Query: {
    getBot
  },
  Bot
};

export default resolvers;
