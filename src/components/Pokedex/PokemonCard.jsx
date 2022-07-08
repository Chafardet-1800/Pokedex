import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IsLoading from '../IsLoading'
import TypesOfPokemon from '../Pokemon/TypesOfPokemon'

const PokemonCard = ({pokemonInfo}) => {

  const UperCase = (text) => {
    return text[0].toUpperCase() + text.substring(1)
  }
  const [pokemon, setPokemon] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const URL = `${pokemonInfo.url}`
    axios.get(URL)
     .then(res => setPokemon(res.data))
     .catch(err => console.log(err))
  }, [])

  const goToInfo = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <>
    {pokemon
      ?
    <article onClick={goToInfo} className='PokemonCard BorderSecondary FlexColumnContainer'>
      
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt="Sprite of Pokemon" />
      
      <h2>{`N°${pokemon.id} ${UperCase(pokemonInfo.name)}`}</h2>

      <TypesOfPokemon
        pokemon={pokemon}
      />


    </article>
      :
    <IsLoading/>
    }
    </>
  )
}

export default PokemonCard