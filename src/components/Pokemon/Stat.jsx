import React from 'react'

const Stat = ({stat}) => {
  return (
    <div className='infoStat'>
        <p className='texto'>{stat.stat.name}</p>
        <p>{stat.base_stat}</p>
    </div>
  )
}

export default Stat