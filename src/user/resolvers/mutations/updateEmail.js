async function updateEmail(_, args, ctx, info) {
  const { email } = args;

  return {
    email,
    error: '@ToDo',
  };
}

export default updateEmail;
