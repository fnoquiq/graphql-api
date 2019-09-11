const { getUserId } = require('./../../auth');

function user(parent, args, context, info) {
  const userId = getUserId(context);
  const myUser = context.db.query.user(
    {
      where: { id: userId },
    },
    info,
  );

  return myUser;
}

module.exports = user;
