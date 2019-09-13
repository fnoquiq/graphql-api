function cards(parent, { id }, context, info) {
  return context.db.query.cards(
    {
      where: { id },
    },
    info
  );
}

export default cards;
