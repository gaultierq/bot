import { Bot } from '@prisma/client';
import { Parent, Context, IndexBotResult } from '../../../../types';

async function indexBot(_: Parent, _args: any, context: Context): Promise<IndexBotResult> {
  const { prisma } = context;
  const bots: Bot[] | null = await prisma.bot.findMany({ where: {} });
  return { bots };
}

export default indexBot;
