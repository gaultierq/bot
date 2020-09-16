import { Interaction } from './types';
import { getInteraction, indexInteraction, nextInteraction } from './queries';
import { createInteraction, deleteInteraction, editInteraction } from './mutations';

const resolvers = {
  Query: {
    getInteraction,
    indexInteraction,
    nextInteraction
  },
  Mutation: {
    createInteraction,
    editInteraction,
    deleteInteraction
  },
  Interaction
};

export default resolvers;
