import { Interaction } from '@prisma/client';
import {
  Context,
  NextInteractionInput,
  NextInteractionResult,
  Parent,
  QueryNextInteractionArgs
} from '../../../../types';
import _ from 'lodash';

async function nextInteraction(
  _parent: Parent,
  _args: QueryNextInteractionArgs,
  context: Context
): Promise<NextInteractionResult> {
  const { prisma } = context;
  const { input } = _args;
  const { conversationId }: NextInteractionInput = input;

  // find last answer
  const answers = await prisma.answer.findMany({
    where: { conversationId },
    orderBy: [{ createdAt: 'desc' }],
    take: 1
  });

  const lastAnswer = _.get(answers, 0);
  const lastInteractionId = lastAnswer?.interactionId;

  // just for compilation
  const interactions: Interaction[] | null = await prisma.interaction.findMany({ where: { predecessorId: lastInteractionId } });

  return { interaction: _.get(interactions, 0) };
}

export default nextInteraction;
