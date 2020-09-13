import { Bot } from '@prisma/client';
import { Context, EditBotInput, GetBotResult, Maybe, MutationEditBotArgs, Parent } from '../../../../types';

async function editBot(_: Parent, args: MutationEditBotArgs, context: Context): Promise<GetBotResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: EditBotInput = input;
  const bot = await prisma.bot.update({ data: input, where: { id } });

  console.debug('editing bot', { input, bot });

  return { bot };
}

export default editBot;
