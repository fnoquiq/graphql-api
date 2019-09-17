import getUserId from '../../auth';

async function updateUser(_, args, ctx, info) {
  const userId = getUserId(ctx);

  const { username, first_name, last_name } = args;

  const user = await ctx.db.mutation.updateUser({
    data: {
      username,
      first_name,
      last_name,
    },
    where: {
      id: userId,
    },
  });

  return user;
}

export default updateUser;
