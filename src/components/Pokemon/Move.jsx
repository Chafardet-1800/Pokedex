import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Move = ({URL}) => {

    const [infoMove, setInfoMove] = useState()
    const [display, setDisplay] = useState(false)

    const changeDisplay = () => setDisplay(!display)

    useEffect(() => {
        axios.get(URL)
        .then(res => setInfoMove(res.data))
        .catch(err => console.log(err))
    },[])



  if(infoMove){
    return (
        <div className='InfoMOve__Container'>
    
            <div onClick={changeDisplay} className='infoMOve'>
                <p className='Capitalize extances'>{infoMove.name}</p>
                <p className={`BorderType Type__${infoMove.type.name}`}>{infoMove.type.name}</p>
            </div>
    
            <div className={ display ? `infoMOve` : 'displayNone'}>
                <p>{infoMove.effect_entries[0].effect}</p>
            </div>
            
        </div>
      )
  }
}

export default Move