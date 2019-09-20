const typeDefs = `
  type User {
    id: ID!
    first_name: String!
    last_name: String
    username: String!
    email: String!
    created_at: DateTime!
    updated_at: DateTime!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    """
    Retorna o usuário logado.
    """
    user: User

    """
    Através de uma String é possivel procurar usuários pelo first_name, last_name e username.
    """
    userSearch(query: String!): [User]!

    """
    Através de um id é possivel buscar um usuário.
    """
    userById(id: ID!): User
  }

  type Mutation {
    """
    Através do username e do password é gerado um token, que é devolvido dentro do AuthPayload
    """
    login(
      username: String!
      password: String!
    ): AuthPayload

    """
    Para fazer o cadastro de usuário (signup), é preciso preencher o username, password e email
    Os campos de first_name e last_name são opcionais, caso eles não sejam preenchidos,
    o nome será preenchido automáticamente com o valor padrão "Unknown".
    """
    createUser(
      username: String!
      password: String!,
      email: String!
      first_name: String
      last_name: String
    ): AuthPayload

    """
    Atualização de informações básica do usuário.
    Na alteração do username, é verificado caso o novo username seja único.
    Para realizar essa mutation, é necessário o token JWT!
    """
    updateUser(
      first_name: String!
      last_name: String!
      username: String!
    ): User

    """
    Na atualização do email, será necessário confirmar um código enviado via email.
    Para realizar essa mutation, é necessário o token JWT!
    """
    updateEmail(
      email: String!
    ): User
  }

`;

export default typeDefs;
