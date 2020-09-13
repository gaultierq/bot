import { Interaction } from '@prisma/client';
import { Context, EditInteractionInput, GetInteractionResult, Maybe, MutationEditInteractionArgs, Parent } from '../../../../types';

async function editInteraction(_: Parent, args: MutationEditInteractionArgs, context: Context): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: EditInteractionInput = input;
  const interaction = await prisma.interaction.update({ data: input, where: { id } });

  console.debug('editing interaction', { input, interaction });

  return { interaction };
}

export default editInteraction;
