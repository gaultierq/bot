/**
 * Answer type resolvers
 */
import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Answer = {
  // author: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
  //   const { id } = parent;
  //   const { prisma } = context;
  //
  //   return prisma.answer.findOne({ where: { id } }).author();
  // }
};

export default Answer;
