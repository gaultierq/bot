import { Answer } from '@prisma/client';
import _ from 'lodash';
import {
  Context,
  CreateAnswerInput,
  GetAnswerResult,
  MutationCreateAnswerArgs,
  Parent
} from '../../../../types';

const QUERY = `SELECT i1.id FROM "Answer" i1
left join "Answer" i2
ON i1.id = i2."predecessorId"
WHERE i2.id IS NULL AND i1."botId" = $1`;

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
