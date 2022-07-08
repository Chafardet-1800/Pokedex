import { createSlice } from '@reduxjs/toolkit';

export const pokemonTrainerSlice = createSlice({
    name: 'pokemonTrainer',
    initialState: null,
    reducers: {
        setPokemonTrainer: (state, action) => action.payload
    }
})

export const { setPokemonTrainer } = pokemonTrainerSlice.actions;

export default pokemonTrainerSlice.reducer;
