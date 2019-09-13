function projectById(parent, { id }, context, info) {
  return context.db.query.project(
    {
      where: { id },
    },
    info,
  );
}

module.exports = projectById;
