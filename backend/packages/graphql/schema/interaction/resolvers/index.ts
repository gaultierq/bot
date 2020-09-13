import { Interaction } from './types';
import {getInteraction, indexInteraction} from './queries';
import { createInteraction, deleteInteraction, editInteraction } from './mutations';

const resolvers = {
  Query: {
    getInteraction,
    indexInteraction
  },
  Mutation: {
    createInteraction,
    editInteraction,
    deleteInteraction
  },
  Interaction
};

export default resolvers;
