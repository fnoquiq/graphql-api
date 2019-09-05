function userSearch(parent, { query }, context, info) {
  let OR = [
    { first_name_contains: query },
    { last_name_contains: query },
    { username_contains: query }
  ];

  return context.db.query.users(
    {
      where: { OR }
    },
    info
  );
}

module.exports = userSearch;
