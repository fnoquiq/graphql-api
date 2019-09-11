function user(parent, args, context, info) {
  const userId = getUserId(context);
  const user = context.db.query.user(
    {
      where: { id: userId },
    },
    info,
  );

  return user;
}

module.exports = user;
