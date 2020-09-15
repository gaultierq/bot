import { Conversation } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetConversationArgs,
  GetConversationInput,
  GetConversationResult
} from '../../../../types';

async function getConversation(
  _: Parent,
  args: QueryGetConversationArgs,
  context: Context
): Promise<GetConversationResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetConversationInput = input;

  console.info('converstation1 with id', { id });
  const conversation: Conversation | null = await prisma.conversation.findOne({
    where: { id }
  });
  console.info('converstation2 with id', { id });

  return { conversation };
}

export default getConversation;
