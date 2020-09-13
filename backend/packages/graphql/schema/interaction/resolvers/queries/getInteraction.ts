import { Interaction } from '@prisma/client';
import { Parent, Context, QueryGetInteractionArgs, GetInteractionInput, GetInteractionResult } from '../../../../types';

async function getInteraction(
  _: Parent,
  args: QueryGetInteractionArgs,
  context: Context
): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetInteractionInput = input;

  const interaction: Interaction | null = await prisma.interaction.findOne({ where: { id } });

  return { interaction };
}

export default getInteraction;
