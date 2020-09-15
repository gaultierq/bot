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
  nextInteraction: async (parent: Parent, _args: Args, context: Context): Promise<Interaction | null> => {
    const { id } = parent;
    const { prisma } = context;
    const botId = parent['botId'] as string;
    console.debug('asking nextInteraction', { botId });
    // const c = parent as Conversation;
    // const lastAnswer = _.last(c.answers);
    // const lastInteraction = lastAnswer.interaction;
    // lastInteraction.
    // wrong id but hey!
    return null;
  }
};

export default Conversation;
