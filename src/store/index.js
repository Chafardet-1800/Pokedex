import { configureStore } from '@reduxjs/toolkit'
import allPokemons from './slices/allPokemons.slice'
import isLoading from './slices/isLoading.slice'
import pokemonTrainer from './slices/pokemonTrainer.slice'
import currentPokemon from './slices/currentPokemon.slice'

export default configureStore({
    reducer: {
        allPokemons,
        isLoading,
        pokemonTrainer,
        currentPokemon
    }
})
