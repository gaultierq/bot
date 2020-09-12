import { Bot } from '@prisma/client';
import { Context, DeleteBotInput, GetBotResult, Maybe, MutationDeleteBotArgs, Parent } from '../../../../types';

async function deleteBot(_: Parent, args: MutationDeleteBotArgs, context: Context): Promise<GetBotResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteBotInput = input;

  const bot = await prisma.bot.delete({ where: { id } });
  console.info('deleted bot:', { bot });
  return { bot };
}

export default deleteBot;
