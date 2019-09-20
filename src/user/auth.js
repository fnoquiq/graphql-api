import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, authConfig.secret);
    return userId;
  }

  throw new Error('Not authenticated!');
}

export default getUserId;
