import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getPokemonsByType } from '../../store/slices/allPokemons.slice'
import IsLoading from '../IsLoading'
import Pagitacion from './Pagination'
import PokemonCard from './PokemonCard'
import PokeSearch from './PokeSearch'

const PokedexScreen = () => {
  // Constantes 
  const [typeList, setTypeList] = useState()
  const [search, setSearch] = useState()
  const [type, setType] = useState('All Pokemons')
  const [filterPokemons, setFilterPokemons] = useState()
  const Loading = useSelector(state => state.isLoading)
  const AllPokemons = useSelector(state => state.allPokemons)
  const dispatch = useDispatch()
  
  //Peticiones y promesas
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypeList(res.data.results))
        .catch(err => console.log(err))
},[])

  useEffect(() => {
    if(type === 'All Pokemons'){
      dispatch(getAllPokemons('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154'))
    }else{
      setSearch('')
      dispatch(getPokemonsByType(`https://pokeapi.co/api/v2/type/${type}`))
    }
  },[type] )

  useEffect(()=>{
    if(search){
      setFilterPokemons(AllPokemons.filter(e => e.name.includes(search.toLowerCase())))
    }else{

    }
  }, [search])

  //Paginacion

  const [currentPage, setCurrentPage] = useState(1)
  let ArrayPokemons = []
  const pokemonsPerPages = 12
  const lastPokemon = currentPage * pokemonsPerPages
  const QuantityPages = Math.ceil(AllPokemons.length / pokemonsPerPages)

  if(AllPokemons.length < lastPokemon){
    const rest = lastPokemon - AllPokemons.length
    ArrayPokemons = AllPokemons.slice(lastPokemon - pokemonsPerPages, lastPokemon - rest)
  }else{
    ArrayPokemons = AllPokemons.slice(lastPokemon - pokemonsPerPages, lastPokemon)
  }

  
  let arrayPages = []
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)

  if(currentBlock * pagesPerBlock >= QuantityPages){
    for(let e = currentBlock * pagesPerBlock - pagesPerBlock + 1; e <= QuantityPages; e++){
      arrayPages.push(e)
    }
  }else{
    for(let e = currentBlock * pagesPerBlock - pagesPerBlock + 1; e <= currentBlock 
      * pagesPerBlock; e++){
      arrayPages.push(e)
    }
  }

  return (

    <>
    {Loading
      ?
    <IsLoading/>
    :
    <div className='PokedexScreen FlexColumnContainer'>

      <header className='PokedexScreen__Header FlexRowContainer'>
        <h1>Pokedex</h1>

        <PokeSearch
          setSearch={setSearch}
          typeList={typeList}
          setType={setType}
        />

      </header>

      <section className='CardContainer FlexRowContainer'>
        {filterPokemons
          ?
          filterPokemons.map((pokemonInfo)=>{
            return <PokemonCard 
            key= {pokemonInfo.url}
            pokemonInfo={pokemonInfo}
            />
          })
          :
          ArrayPokemons.map((pokemonInfo)=>{
            return <PokemonCard 
            key= {pokemonInfo.url}
            pokemonInfo={pokemonInfo}
            />
          })}
      </section>

      <Pagitacion
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        arrayPages={arrayPages}
        QuantityPages={QuantityPages}
      />

    </div>
    }
    </>

  )
}

export default PokedexScreen