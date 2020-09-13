import { Interaction } from '@prisma/client';
import {
  Context,
  DeleteInteractionInput,
  GetInteractionResult,
  Maybe,
  MutationDeleteInteractionArgs,
  Parent
} from '../../../../types';

async function deleteInteraction(
  _: Parent,
  args: MutationDeleteInteractionArgs,
  context: Context
): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteInteractionInput = input;

  const interaction = await prisma.interaction.delete({ where: { id } });
  console.info('deleted interaction:', { interaction });
  return { interaction };
}

export default deleteInteraction;
