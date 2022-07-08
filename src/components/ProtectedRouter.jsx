import React from 'react'
import { useSelector } from 'react-redux'
import{Navigate, Outlet} from 'react-router-dom'

const ProtectedRouter = () => {

    const trainer = useSelector(state => state.pokemonTrainer)
    
    if(trainer){
       return <Outlet/>
    }else{
       return <Navigate to='/'/>
    }

}

export default ProtectedRouter