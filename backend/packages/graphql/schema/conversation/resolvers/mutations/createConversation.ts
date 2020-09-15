import { Conversation } from '@prisma/client';
import {
  Context,
  CreateConversationInput,
  GetConversationResult,
  MutationCreateConversationArgs,
  Parent
} from '../../../../types';

async function createConversation(
  _parent: Parent,
  args: MutationCreateConversationArgs,
  context: Context
): Promise<GetConversationResult> {
  const { prisma } = context;
  const { input } = args;
  const { botId }: CreateConversationInput = input;

  const conversation: Conversation | null = await prisma.conversation.create({
    data: {
      bot: {
        connect: {
          id: botId
        }
      }
    }
  });

  return { conversation };
}

export default createConversation;
