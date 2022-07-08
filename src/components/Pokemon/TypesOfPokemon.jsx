import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TypesOfPokemon = ({pokemon}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results.map(e => e.name)))
            .catch(err => console.log(err))
    }, [])


  if(types){
    return (
      <div className='Type__Container'>
          <div className={`BorderType Type__${pokemon.types[0].type.name}`}>
              <p>{pokemon.types[0].type.name}</p>
          </div>
        <br />
          {pokemon.types[1] && <div className={`BorderType Type__${pokemon.types[1].type.name}`}>
              <p>{pokemon.types[1].type.name}</p>
          </div>}
      </div>
    )
  }
}

export default TypesOfPokemon