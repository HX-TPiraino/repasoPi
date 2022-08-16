const { Router } = require("express");
const {chargeAndGetEpisodes} = require("../controlers/episodesC")
const server = Router()


server.get("", chargeAndGetEpisodes)

module.exports = server