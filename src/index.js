import server from './server/server';

const API_PORT = 4000;

server
  .start()
  .then(() =>
    console.log(`:rocket: Server running on http://localhost:${API_PORT}...`)
  );
