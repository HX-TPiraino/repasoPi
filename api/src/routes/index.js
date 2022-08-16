const { Router } = require("express");
const Episodes = require("./episode")
const Characters = require("./character")
const server = Router();

// Configurar los routers

server.use("/character", Characters);
server.use("/episode", Episodes);


module.exports = server;
