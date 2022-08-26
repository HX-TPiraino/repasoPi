import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllEpisodes } from '../../redux/actions'
import { validationInput } from './validation'
import './form.css'

const Form = () => {

  const dispatch = useDispatch()
  
  const [character,setCharacter] = useState({
    name:'',
    origin:'',
    specie:'',
    image:'',
    episodes:[]
  })

  const [errors,setErrors]= useState({})

  const reducerEpisodes = useSelector(state=> state.episodes)

  useEffect(() => {
    dispatch(getAllEpisodes())
  }, [dispatch])
  
  useEffect(() => {
    setErrors(validationInput(character))
  }, [character])
  

  const handleChange = (e)=>{
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    })
    console.log(character)
  }

  const handleClick = (e)=>{
    e.preventDefault()
    if(character.episodes.includes(Number(e.target.value))){
      window.alert('el episodio ya está añadido. Elige otro')
    } else {
      setCharacter({
        ...character,
        episodes: [...character.episodes,Number(e.target.value)]
      })
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
      console.log(character)

  }


  return (
    <div>
      <form>
        <label>Name</label>
        <input type='text' name='name'value={character.name} onChange={handleChange}/>
        <label>Origin</label>
        <input type='text' name='origin'value={character.origin} onChange={handleChange}/>
        <label>Specie</label>
        <input type='text' name='specie'value={character.specie} onChange={handleChange}/>
        <label>Image</label>
        <input type='text' name='image'value={character.image} onChange={handleChange}/>

        {reducerEpisodes.map(ep=>{
          return(
            <button key={ep.id} value={ep.id} onClick={handleClick}>{ep.name}</button>
          )
        })}

        <button className={Object.keys(errors).length > 0 ? 'btn_oculto' : 'btn_activo'} onClick={handleSubmit}>Crear</button>

      </form>
        
        {
        (errors.name && <p>{errors.name}</p>) 
        ||
        (errors.specie && <p>{errors.specie}</p>)
        ||
        (errors.episodes && <p>{errors.episodes}</p>)
        }

    </div>
  )
}

export default Form