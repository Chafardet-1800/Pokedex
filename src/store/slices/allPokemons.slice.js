import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';



export const allPokemonsGlobalSlice = createSlice({
    name: 'allPokemons',
    initialState: [],
    reducers: {
        setAllPokemons: (state, action) => action.payload,
    }
})

export const { setAllPokemons} = allPokemonsGlobalSlice.actions;

export const getAllPokemons = (URL) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(URL)
        .then((res) => dispatch(setAllPokemons(res.data.results)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const getPokemonsByType = (URL) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(URL)
        .then((res) => dispatch(setAllPokemons(res.data.pokemon.map(e => e.pokemon))))
        .finally(() => dispatch(setIsLoading(false)));
}

export default allPokemonsGlobalSlice.reducer;
