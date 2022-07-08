import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const currentPokemonSlice = createSlice({
    name: 'currentPokemon',
    initialState: {},
    reducers: {
        setCurrentPokemon: (state, action) => action.payload
    }
})

export const { setCurrentPokemon } = currentPokemonSlice.actions;

export const getCurrentPokemon = (URL) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(URL)
        .then((res) => dispatch(setCurrentPokemon(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default currentPokemonSlice.reducer;
