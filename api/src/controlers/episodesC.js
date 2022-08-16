const {Episode} = require ('../db')
const axios = require('axios')

async function getAllEpisodes(req,res) {
    const getEpisodes = await axios(`https://rickandmortyapi.com/api/episode`)
    let episodes = getEpisodes.data.results
    episodes.map(e =>{ 
        return {
            id: e.id,
            name: e.name,
        }
    });
    return episodes
};

async function chargeAndGetEpisodes(req,res) {
    let dbEpisodes = await Episode.findAll({})
    if(!dbEpisodes.length) {
        let episode = await getAllEpisodes()
        return Episode.bulkCreate(episode)
        .then(r => { return('Charged Episodes') })
        .catch(error => console.log(error))
            
    } else {
        res.send(dbEpisodes)
    }
};


module.exports = {
    getAllEpisodes,
    chargeAndGetEpisodes,
}