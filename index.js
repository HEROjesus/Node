// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//   res.write("server");
//   return res.end();
// });

// server.listen(33333);

import { fastify } from 'fastify';
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from './database-postgres.js';

// const database = new DatabaseMemory()
const database = new DatabasePostgres()

const server = fastify();

// Post cria os videos 
server.post("/Videos", async (req, reply) => {

  const { title, description, duration, } = req.body



  await database.create({
    title,
    description,
    duration,
  });



  return reply.status(201).send();
});



server.get("/Videos", async (req) => {

  const search = req.query.search

  const videos = await database.list(search)


  return videos

});


// PUT Atualiza 
server.put("/Videos/:id", (req, reply) => {
  const VideosID = req.params.id
  const { title, description, duration, } = req.body

  database.update(VideosID, {
    title,
    description,
    duration,
  })

  return reply.status(204).send()

});

// DELETE Apaga o conteudo  
server.delete("/Videos/:id", (req, reply) => {

  const VideosID = req.params.id

  database.delete(VideosID)

  return reply.status(204).send()

});

server.listen({
  host: '0.0.0.0', 
  port: process.env.PORT ?? 4000,
});
