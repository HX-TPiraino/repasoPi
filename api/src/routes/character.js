const { Router } = require("express");
const {getAllCharacters, postCharacter} = require("../controlers/characterC")
const server = Router()


server.get("", getAllCharacters)

server.post("", postCharacter)

module.exports = server