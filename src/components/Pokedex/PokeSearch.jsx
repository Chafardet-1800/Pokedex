import axios from 'axios'
import React, { useEffect } from 'react'

const PokeSearch = ({setSearch,typeList,setType}) => {

    const UperCase = (text) => {
        return text[0].toUpperCase() + text.substring(1)
      }

    const changeInputText = e => {setSearch(e.target.value)}

    const changeInputSelect = e => {setType(e.target.value)}

    return (
        <form className='SearchForm FlexRowContainer'>
            <input 
                className='SearchInput'
                type="text"
                placeholder='Search for one Pokemon'
                onChange={changeInputText}
            />

            <select onChange={changeInputSelect} className='SelectInput '>

                <option value="All Pokemons">All Pokemons</option>

                {typeList?.map(type => {
                   return <option key={type.name} value={type.name}>{UperCase(type.name)}</option>
                })}
                
            </select>

        </form>
    )}
    
export default PokeSearch