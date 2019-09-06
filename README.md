# NoName-API
---

A organização dos commits devem acompanhar o seguinte [padrão](https://gist.github.com/fnoquiq/12f7800b219ff03de84ab10dba24e9af)

---

Playground da API pode ser acessado em ``` localhost:4000 ```

Playground do PRISMA pode ser acessado em ``` localhost:4000/noName-api/dev ```

Admin do PRISMA pode ser acessado em ``` localhost:4000/noName-api/dev/_admin ```

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
