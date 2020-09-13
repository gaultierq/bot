import { Interaction } from '@prisma/client';
import {
  Context,
  IndexInteractionInput,
  IndexInteractionResult,
  Parent,
  QueryIndexInteractionArgs
} from '../../../../types';

async function indexInteraction(
  _: Parent,
  _args: QueryIndexInteractionArgs,
  context: Context
): Promise<IndexInteractionResult> {
  const { prisma } = context;
  const { input } = _args;
  const { botId }: IndexInteractionInput = input;
  const interactions: Interaction[] | null = await prisma.interaction.findMany({ where: { botId } });
  return { interactions };
}

export default indexInteraction;
