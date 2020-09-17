/**
 * Conversation type resolvers
 */
import { Answer, Args, Context, Parent } from '../../../../types';

const Conversation = {
  answers: async (parent: Parent, _args: Args, context: Context): Promise<Answer[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.answer.findMany({ where: { conversationId: id }, include: { interaction: true } });
  },
};

export default Conversation;
