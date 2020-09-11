import { Bot } from '@prisma/client';
import { Context, CreateBotInput, GetBotResult, MutationCreateBotArgs, Parent } from '../../../../types';

async function createBot(_: Parent, args: MutationCreateBotArgs, context: Context): Promise<GetBotResult> {
  const { prisma } = context;
  const { input } = args;
  const { title }: CreateBotInput = input;

  const bot: Bot | null = await prisma.bot.create({ data: { title } });

  return { bot };
}

export default createBot;
