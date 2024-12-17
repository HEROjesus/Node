// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//   res.write("server");
//   return res.end();
// });

// server.listen(33333);

import { fastify } from 'fastify';
import { DatabaseMemory } from "./database-memory.js";

const database = new DatabaseMemory()

const server = fastify();

// Post cria os videos 
server.post("/Videos", (req, reply) => {
  database.create({
    title: "title",
    video: "video",
    description: "description",
    duration: "duration", 
  });

  

  return reply.status(201).send();
});



server.get("/Videos", () => {
  return "hello node";
});


// PUT Atualiza 
server.put("/Videos/:id", () => {
  return "hello Videos";
});

// DELETE Apaga o conteudo  
server.delete("/Videos/:id", () => {
  return "hello Videos";
});

server.listen({
  port: 4000,
});
