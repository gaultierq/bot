import { Conversation } from '@prisma/client';
import { Parent, Context, QueryGetConversationArgs, GetConversationInput, GetConversationResult } from '../../../../types';

async function getConversation(_: Parent, args: QueryGetConversationArgs, context: Context): Promise<GetConversationResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetConversationInput = input;

  const conversation: Conversation | null = await prisma.conversation.findOne({ where: { id } });

  return { conversation };
}

export default getConversation;
