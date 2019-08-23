const { server } = require("./server/server.js");

server
  .start()
  .then(() => console.log("Server running on http://localhost:4000..."));
