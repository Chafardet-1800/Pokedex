import React from 'react'
import HomeForm from './HomeForm'

const HomeScreen = () => {

  

  return (
    <div className='HomeScreen'>

      <div className='HomeScreen__Img__Container FlexColumnContainer'>
        <div className='Img'>
        <img src='https://images.wikidexcdn.net/mwuploads/wikidex/c/cf/latest/20111015020014/Profesor_Serbal_B.png' alt="Prf Serbal" />
        </div>
      </div>

      <article className='HomeScreen__Form__container '>
          <div className='BorderPrimary'>
            <HomeForm/>
          </div>
      </article>

      <article className='HomeScreen__Welcome FlexColumnContainer'>
          <div className='HomeScreen__Welcome_Background BorderPrimary'>
            <p className='HomeScreen__welcome__Text'>
              My name is Serbal.
              <br />
              I welcome you to the world of pokemon!
              <br />
              Talk me about more about you...
            </p>
          </div>
      </article>
      
      

    </div>
  )
}

export default HomeScreen