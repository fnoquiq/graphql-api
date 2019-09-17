import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth';

async function createUser(_, args, ctx, info) {
  const { username, password, email, first_name, last_name } = args;

  const password_hash = await bcrypt.hash(password, authConfig.hashRounds);

  const user = await ctx.db.mutation.createUser({
    data: {
      username,
      password_hash,
      email,
      first_name,
      last_name,
    },
  });

  const token = jwt.sign({ userId: user.id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });

  return {
    token,
    user,
  };
}

export default createUser;
