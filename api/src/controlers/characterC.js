const {Character, Episode} = require ('../db')
const axios = require("axios")

async function getAllCharacters(req,res) {
    try {   
            const getCharacters = await axios(`https://rickandmortyapi.com/api/character`)
            let characters = getCharacters.data.results
            characters.map(c =>{ 
                return {
                    id: c.id,
                    name: c.name,
                    image: c.image,
                    origin: c.origin,
                    species: c.species,
                    episode: c.episode
                }
            });

            let dbInfo = (await Character.findAll({
                include: {
                    model:Episode,
                    attributes:["name"],
                    through: {attributes:[]}
            }
            }))

            res.json([...dbInfo , ...characters]);

        } catch (error) {

        res.status(404).send(`ERROR DEL TIPO ${error}`)
    }
};

async function postCharacter(req,res) {
try {
        const { name , image , origin , species , episode } = req.body
        let newCharacter = await Character.create({name,image,origin,species})
        await newCharacter.addEpisode(episode)
        res.send(newCharacter)
    } catch(error) {
        res.status(404).json(error)
    }
};  

module.exports = {
    getAllCharacters,
    postCharacter
}