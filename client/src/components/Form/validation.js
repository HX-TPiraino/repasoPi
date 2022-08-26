export const validationInput = (character)=>{
let errors = {}
if(!character.name) errors.name = 'name es requerido'
if(!character.name.length > 3) errors.name = 'name debe tener mas de 3 letras'
if(character.name.length > 50) errors.name = 'name debe tener menos de 50 letras'
if(!character.specie) errors.specie = 'specie es requerido'
if(!character.episodes.length > 0) errors.episodes = "se requiere almenos un episodio"
if(character.episodes.length > 2) errors.episodes = "debe tener como maximo 2 episodios"
return errors
}