import { Answer } from './types';
import { getAnswer, indexAnswer } from './queries';
import { createAnswer, deleteAnswer, editAnswer } from './mutations';

const resolvers = {
  Query: {
    getAnswer,
    indexAnswer
  },
  Mutation: {
    createAnswer,
    editAnswer,
    deleteAnswer
  },
  Answer
};

export default resolvers;
