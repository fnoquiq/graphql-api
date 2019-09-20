function userSearch(parent, { query }, context, info) {
  const OR = [
    { first_name_contains: query },
    { last_name_contains: query },
    { username_contains: query },
  ];

  return context.db.query.users(
    {
      where: { OR },
    },
    info
  );
}

export default userSearch;
