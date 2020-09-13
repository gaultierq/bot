import { Interaction } from '@prisma/client';
import { Parent, Context, IndexInteractionResult } from '../../../../types';

async function indexInteraction(_: Parent, _args: any, context: Context): Promise<IndexInteractionResult> {
  const { prisma } = context;
  const interactions: Interaction[] | null = await prisma.interaction.findMany({ where: {} });
  return { interactions };
}

export default indexInteraction;
