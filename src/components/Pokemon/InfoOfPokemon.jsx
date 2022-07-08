import React, { useEffect, useState } from 'react'
import PokemonStats from './PokemonStats'
import PokemonMoves from './PokemonMoves'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getCurrentPokemon } from '../../store/slices/currentPokemon.slice'
import IsLoading from '../IsLoading'
import EspeciePokemon from './EspeciePokemon'
import TypesOfPokemon from './TypesOfPokemon'

const InfoOfPokemon = () => {

  const [request, setRequest] = useState()
  const Loading = useSelector(state => state.isLoading)
  const param = useParams()
  const dispatch = useDispatch()
  const info = useSelector(state => state.currentPokemon)
  const pokemon = useSelector(state => state.currentPokemon)
  const URL = info.species?.url
  const moves = info?.moves
  const stats = info?.stats

  const changeRequest = v => setRequest(v)
  
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${param.id}/`
    dispatch(getCurrentPokemon(URL))
  }, [])

  return (
    <>
    {Loading
      ?
    <IsLoading/>
    :
    <div className='InfoScreen FlexColumnContainer'>

      <header className='Info__Header '>
        <Link to='/pokedex' className='BorderSecondary Info__Back'><i className="fa-solid fa-arrow-left"></i></Link>
      </header>

      <div className='Grid__Container'>

        {info ?
        <>
          <div className='Grid__1'>
            
            <h1>{`${info.name} N°${info.id}`}</h1>

            <div className='Info__Img__Container'>
              <img src={info.sprites?.other['official-artwork'].front_default} alt="Pokemon image" />
            </div>

            <TypesOfPokemon pokemon={pokemon}/>

            <EspeciePokemon URL={URL}/>

          </div>

          <div className='Grid__2'>

            <nav className='BorderSecondary Nav__Links'>
              <button className='BorderSecondary texto' onClick={() => changeRequest('stats')}>Stats</button>
              <button className='BorderSecondary texto' onClick={() => changeRequest('Moves')}>Moves</button>
            </nav>

            {request === 'Moves' ? <PokemonMoves moves={moves}/> : <PokemonStats stats={stats}/>}

          </div>
        </>
        :
        <IsLoading/>
        }

      </div>

    </div>}
    </>
    
  )
}

export default InfoOfPokemon