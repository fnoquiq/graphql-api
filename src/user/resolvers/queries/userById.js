function userById(parent, { id }, context, info) {
  return context.db.query.user(
    {
      where: { id },
    },
    info,
  );
}

export default userById;
