const { Router } = require("express");
const {getAllCharacters, postCharacter} = require("../controlers/characterC")
const server = Router()

//localhost:3001/character

server.get("", getAllCharacters)//GET ---> localhost:3001/character

server.post("", postCharacter)//POST ---> localhost:3001/character

module.exports = server