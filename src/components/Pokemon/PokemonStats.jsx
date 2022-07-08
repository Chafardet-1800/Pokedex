import React from 'react'
import Stat from './Stat'

const PokemonStats = ({stats}) => {

  if(stats){
    return (
      <div className='stats__Container FlexColumnContainer'>
  
        {stats.map(stat => {
          return <Stat stat={stat}/>
        })}
        
      </div>
    )
  }
}

export default PokemonStats