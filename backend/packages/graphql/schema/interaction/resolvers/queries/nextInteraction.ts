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

  const c = await prisma.conversation.findOne({ where: { id: conversationId } });

  if (!c) throw 'conversation not found: ' + conversationId;

  // find last answer
  const answers = await prisma.answer.findMany({
    where: { conversationId },
    orderBy: [{ createdAt: 'desc' }],
    take: 1
  });

  const lastAnswer = _.get(answers, 0);
  const lastInteractionId = lastAnswer?.interactionId;
  console.debug('interaction after ', { lastAnswer });
  // just for compilation
  const interactions: Interaction[] | null = await prisma.interaction.findMany({
    where: { predecessorId: lastInteractionId, botId: c.botId }
  });

  return { interaction: _.get(interactions, 0) };
}

export default nextInteraction;
