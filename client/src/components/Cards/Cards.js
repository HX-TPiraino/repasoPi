import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import Card from '../Card/Card';

const Cards = () => {
const dispatch = useDispatch();

const characters = useSelector(state=>state.characters)

  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch])
  
if(characters.length){
  return (
    <div>
      {characters.map(character=>{
        return (
          <Card key={character.id} element={character} />
        )
      })}
    </div>
  )
} else {
  return (
    <h1>LOADING...</h1>
  )
}
}

export default Cards