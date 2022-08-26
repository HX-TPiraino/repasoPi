const { Router } = require("express");
const Episodes = require("./episode")
const Characters = require("./character")
const server = Router();

// Configurar los routers

//localhost:3001

server.use("/character", Characters);//localhost:3001/character
server.use("/episode", Episodes);//localhost:3001/episode

module.exports = server;
