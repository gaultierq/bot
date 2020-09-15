import { Answer } from '@prisma/client';
import { Context, CreateAnswerInput, GetAnswerResult, MutationCreateAnswerArgs, Parent } from '../../../../types';

async function createAnswer(
  _parent: Parent,
  args: MutationCreateAnswerArgs,
  context: Context
): Promise<GetAnswerResult> {
  const { prisma } = context;
  const { input } = args;
  const { conversationId, interactionId, content }: CreateAnswerInput = input;

  const answer: Answer | null = await prisma.answer.create({
    data: {
      interaction: {
        connect: {
          id: interactionId
        }
      },
      conversation: {
        connect: {
          id: conversationId
        }
      },
      content
    }
  });

  return { answer };
}

export default createAnswer;
