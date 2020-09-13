import { Interaction } from '@prisma/client';
import {
  Context,
  CreateInteractionInput,
  GetInteractionResult,
  MutationCreateInteractionArgs,
  Parent
} from '../../../../types';

async function createInteraction(
  _: Parent,
  args: MutationCreateInteractionArgs,
  context: Context
): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { botId, content }: CreateInteractionInput = input;

  const interaction: Interaction | null = await prisma.interaction.create(
    {
      data: {
        bot: {
          connect: {
            id: botId
          }
        },
        content
      }
    });

  return { interaction };
}

export default createInteraction;
