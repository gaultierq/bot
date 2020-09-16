/**
 * Conversation type resolvers
 */
import { Args, Context, Interaction, Parent } from '../../../../types';

const Conversation = {
  // answers: async (parent: Parent, _: Args, context: Context): Promise<Answer[] | null> => {
  //   const { id } = parent;
  //   const { prisma } = context;
  //
  //   return prisma.answer.findMany({ where: { conversationId: id } });
  // },
};

export default Conversation;
