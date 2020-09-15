import { Interaction } from '@prisma/client';
import _ from 'lodash';
import {
  Context,
  CreateInteractionInput,
  GetInteractionResult,
  MutationCreateInteractionArgs,
  Parent
} from '../../../../types';
import { Prisma } from '@backend/db';

const LAST_INTERACTION = `SELECT i1.id FROM "Interaction" i1
left join "Interaction" i2
ON i1.id = i2."predecessorId"
WHERE i2.id IS NULL AND i1."botId" = $1`;

export const getLastInteractionId = async function (prisma: Prisma, botId: string) {
  const predecessorIds = await prisma.$queryRaw(LAST_INTERACTION, botId);
  if (predecessorIds.length > 1) throw `too many predecessors for ${botId}`;
  const predecessorId = _.get(predecessorIds, '0.id');
  return predecessorId;
};

async function createInteraction(
  _parent: Parent,
  args: MutationCreateInteractionArgs,
  context: Context
): Promise<GetInteractionResult> {
  const { prisma } = context;
  const { input } = args;
  const { botId, content }: CreateInteractionInput = input;

  const predecessorId = await getLastInteractionId(prisma, botId);
  console.debug(`creating interaction for bot=${botId} with`, { predecessorId });

  const data = {
    bot: {
      connect: {
        id: botId
      }
    },
    content
  };
  if (predecessorId) {
    data['predecessor'] = {
      connect: {
        id: predecessorId
      }
    };
  }

  const interaction: Interaction | null = await prisma.interaction.create({
    data
  });

  return { interaction };
}

export default createInteraction;
