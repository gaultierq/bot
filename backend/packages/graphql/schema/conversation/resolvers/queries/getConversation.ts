import { Conversation } from '@prisma/client';
import {
  Context,
  GetConversationInput,
  GetConversationResult,
  Parent,
  QueryGetConversationArgs
} from '../../../../types';
import { findNextInteraction } from './nextInteraction';

async function getConversation(
  _: Parent,
  args: QueryGetConversationArgs,
  context: Context
): Promise<GetConversationResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetConversationInput = input;

  const conversation: Conversation | null = await prisma.conversation.findOne({
    where: { id }
  });
  console.info('converstation with id', { conversation });
  const { interaction } = await findNextInteraction(prisma, id);

  return { conversation, nextInteraction: interaction };
}

export default getConversation;
