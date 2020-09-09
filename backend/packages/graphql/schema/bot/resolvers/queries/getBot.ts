import { Bot } from '@prisma/client';
import { Parent, Context, QueryGetBotArgs, GetBotInput, GetBotResult } from '../../../../types';

async function getBot(_: Parent, args: QueryGetBotArgs, context: Context): Promise<GetBotResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetBotInput = input;

  const bot: Bot | null = await prisma.bot.findOne({ where: { id } });

  return { bot };
}

export default getBot;
