import React from 'react'

const Card = ({element}) => {
  return (
    <div>
      <h3>{element.name}</h3>
      <p>{element.origin.name}</p>
    </div>
  )
}

export default Card