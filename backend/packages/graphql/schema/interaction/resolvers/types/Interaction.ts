/**
 * Interaction type resolvers
 */
import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Interaction = {
  // author: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
  //   const { id } = parent;
  //   const { prisma } = context;
  //
  //   return prisma.interaction.findOne({ where: { id } }).author();
  // }
};

export default Interaction;
