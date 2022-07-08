import React, { useEffect, useState } from 'react'
import Move from './Move'

const PokemonMoves = ({moves}) => {

  return (
    <div className='Moves__Container FlexColumnContainer'>
      {moves.map(e => {
        const URL = e.move.url
        return <Move URL={URL}/>
      })}
    </div>
  )
}

export default PokemonMoves