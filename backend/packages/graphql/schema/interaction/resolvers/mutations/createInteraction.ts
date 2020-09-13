import { Interaction } from '@prisma/client';
import { Context, CreateInteractionInput, GetInteractionResult, MutationCreateInteractionArgs, Parent } from '../../../../types';

async function createInteraction(_: Parent, args: MutationCreateInteractionArgs, context: Context): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { content }: CreateInteractionInput = input;

  const interaction: Interaction | null = await prisma.interaction.create({ data: { content } });

  return { interaction };
}

export default createInteraction;
