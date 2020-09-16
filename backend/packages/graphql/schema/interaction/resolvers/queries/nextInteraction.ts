import { Interaction } from '@prisma/client';
import {
  Context,
  NextInteractionInput,
  NextInteractionResult,
  Parent,
  QueryNextInteractionArgs
} from '../../../../types';

async function nextInteraction(
  _parent: Parent,
  _args: QueryNextInteractionArgs,
  context: Context
): Promise<NextInteractionResult> {
  const { prisma } = context;
  const { input } = _args;
  const { conversationId }: NextInteractionInput = input;

  // just for compilation
  const interaction: Interaction | null = await prisma.interaction.findOne({ where: { id: conversationId } });
  return { interaction };
}

export default nextInteraction;
