# NoName-API

---

Playground da API pode ser acessado em `localhost:4000`

Playground do PRISMA pode ser acessado em `localhost:4000/noName-api/dev`

Admin do PRISMA pode ser acessado em `localhost:4000/noName-api/dev/_admin`

---

Para rodar a aplicação é necessario possuir as seguintes tecnologias:

- NodeJS
- NPM/Yarn
- Docker

---

Para executar a aplcação deve-se criar um arquivo .env no root do projeto e executar os seguintes comandos:

```
docker-compose up -d
```

```
prisma deploy
```

---

### Mensagens de commit styleguide

- Usar modo imperativo (uma dica é fazer a pergunta: "O que este commit faz?" e responder: "Este commit **Adiciona feature**)
  - "Adiciona feature" 👍🏻
  - "Adicionada feature" 💩
  - "Adicionando feature" 💩
- Primeira linha deve ter no máximo 72 caracteres
- Considere descrever com detalhes no corpo do commit
- Considere usar um emoji no início da mensagem de commit

| Emoji                       | Code                          | Commit Type                                              |
| --------------------------- | ----------------------------- | -------------------------------------------------------- |
| :tada:                      | `:tada:`                      | initial commit                                           |
| :building_construction:     | `:building_construction:`     | quando melhorar a estrutura/formato de pastas/diretórios |
| :hammer:                    | `:hammer:`                    | quando melhorar ou refatorar um código já existente      |
| :fire:                      | `:fire:`                      | quando deletar arquivos desnecessários                   |
| :memo:                      | `:memo:`                      | quando escrever alguma documentação                      |
| :bug:                       | `:bug:`                       | quando corrigir um bug                                   |
| :heavy_check_mark:          | `:heavy_check_mark:`          | quando adicionar testes                                  |
| :rocket:                    | `:rocket:`                    | nova feature                                             |
| :arrow_up_down:             | `:arrow_up_down:`             | ao adicionar ou remover dependências.                    |
| :twisted_rightwards_arrows: | `:twisted_rightwards_arrows:` | merge em branchs                                         |
| :rewind:                    | `:rewind:`                    | ao reverter versões                                      |
| :whale:                     | `:whale:`                     | ao atualizar arquivos docker                             |
| :see_no_evil:               | `:see_no_evil:`               | gambiarra                                                |

### Exemplo

```bash
git commit
- > :memo: Adiciona instruções de contribuição
- >
- > Foi criado o arquivo CONTRIBUTING.md com as instruções de
- > como fazer um bom commit"
```

---

## Workflow com GitHub

| Etapas                                             | 1° Comando                   | 2° Comando                                  | 3° Comando              |
| -------------------------------------------------- | ---------------------------- | ------------------------------------------- | ----------------------- |
| [1] Criação da branch                              | `git fetch origin`           | `git checkout -b feature-01 origin/develop` |
| [2] Trabalho                                       | `git add`                    | `git commit`                                | -                       |
| [3] Rebase                                         | `git fetch origin`           | `git rebase origin/develop`                 | -                       |
| [4] Resolução de conflitos (Se houverem conflitos) | `git status`                 | `git add`                                   | `git rebase --continue` |
| [5] PR (pull request)                              | `git push origin feature-01` | -                                           | -                       |
| [6] Abra o PR pelo GitHub                          | -                            | -                                           | -                       |
| [7] Code Review                                    | -                            | -                                           | -                       |

## Resumo dos principais comandos do Git

| Comando                                  | Descrição                                                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| git config --global user.name <username> | Configurar o nome de usuário na máquina local                                                               |
| git config --global user.email <email>   | Configurar o endereço de e-mail na máquina local                                                            |
| git init                                 | Inicia a linha do tempo                                                                                     |
| git add                                  | Adiciona ou atualiza mudanças para irem para a linha do tempo                                               |
| git commit                               | Adiciona um ponto na linha do tempo                                                                         |
| git log                                  | Visualiza os pontos na linha do tempo / commit                                                              |
| git status                               | Informa o estado das alterações do nosso projeto                                                            |
| git show                                 | Apresenta determinado ponto na história                                                                     |
| git branch                               | Gerencia novas linhas do tempo                                                                              |
| git checkout                             | Manipula as linhas do tempo, você consegue pular de uma linha do tempo para outra                           |
| git merge                                | Unir linhas do tempo                                                                                        |
| git pull                                 | Puxa do repositório remoto                                                                                  |
| git clone                                | Clonar um projeto / repositório                                                                             |
| git fetch                                | Esse comando atualiza as referências locais com relações às remotas, mas não faz o merge com o branch local |
| git rebase                               | Esse comando provê um histórico linear e maior controle na resolução de conflitos                           |
| git push                                 | Sobe as alterações feitas no repositório local para o repositório remoto                                    |
