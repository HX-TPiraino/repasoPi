export const validationInput = (character)=>{
let errors = {}
if(!character.name) errors.name = 'name es requerido'
if(!character.specie) errors.specie = 'specie es requerido'
return errors
}