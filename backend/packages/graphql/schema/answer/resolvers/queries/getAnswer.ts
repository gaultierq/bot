import { Answer } from '@prisma/client';
import { Parent, Context, QueryGetAnswerArgs, GetAnswerInput, GetAnswerResult } from '../../../../types';

async function getAnswer(
  _: Parent,
  args: QueryGetAnswerArgs,
  context: Context
): Promise<GetAnswerResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetAnswerInput = input;

  const answer: Answer | null = await prisma.answer.findOne({ where: { id } });

  return { answer };
}

export default getAnswer;
