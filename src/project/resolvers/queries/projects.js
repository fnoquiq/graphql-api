import getUserId from '../../../user/auth';

function projects(parent, args, context, info) {
  const userId = getUserId(context);
  const myOwnerProjects = context.db.query.user(
    {
      where: { owner: userId },
    },
    info
  );

  return myOwnerProjects;
}

export default projects;
