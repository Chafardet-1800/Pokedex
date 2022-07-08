import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EspeciePokemon = ({URL}) => {
    const [texteINfo, setTexteINfo] = useState()
    useEffect(() => {
        axios.get(URL)
        .then(res => setTexteINfo(res.data.flavor_text_entries[0].flavor_text))
    }, [])

  return (
    <div className='Info__Text__Container BorderPrimary'>
        <p className='texto'>
            {texteINfo}
        </p>
    </div>
  )
}

export default EspeciePokemon