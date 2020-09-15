/**
 * Conversation type resolvers
 */
import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Conversation = {
  // author: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
  //   const { id } = parent;
  //   const { prisma } = context;
  //
  //   return prisma.conversation.findOne({ where: { id } }).author();
  // }
};

export default Conversation;
