import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPokemonTrainer } from '../../store/slices/pokemonTrainer.slice';

const HomeForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();

    const submit = (data) => {
        dispatch(setPokemonTrainer(data.nameTrainer))
        reset({
          nameTrainer: ''
        })
        navigate('/pokedex')
    }

  return (
    <form className='HomeScreen__Form FlexColumnContainer' onSubmit={handleSubmit(submit)}>
      
      <label htmlFor="nameTrainer">What is your name?</label>

      <input type="text" id='nameTrainer' className='BorderPrimary' placeholder='Put your name here' {...register('nameTrainer')}/>
      
      <button className='HomeScreen__Form__Button BorderPrimary'>Go!</button>
    
    </form>
  )
}

export default HomeForm