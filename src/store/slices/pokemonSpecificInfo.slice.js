import { createSlice } from '@reduxjs/toolkit';

export const pokemonInfoSlice = createSlice({
    name: 'pokemonInfo',
    initialState: {},
    reducers: {
        setPokemonInfo: (state, action) => action.payload
    }
})

export const {  } = pokemonInfoSlice.actions;

export default pokemonInfoSlice.reducer;
