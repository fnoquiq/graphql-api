import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import authConfig from '../../../config/auth';

async function login(_, { username, password }, ctx, info) {
  const user = await ctx.db.query.user({ where: { username } });
  if (!user) {
    throw new Error('Invalid credentials!');
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    throw new Error('Invalid credentials!');
  }

  const token = jwt.sign({ userId: user.id }, authConfig.secret, {
    expiresIn: authConfig.expiresIn,
  });

  return {
    token,
    user,
  };
}

export default login;
