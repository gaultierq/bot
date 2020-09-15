import { Answer } from './types';
import { getAnswer } from './queries';
import { createAnswer } from './mutations';

const resolvers = {
  Query: {
    getAnswer,
  },
  Mutation: {
    createAnswer,
  },
  Answer
};

export default resolvers;
