import HomeScreen from './components/Home/HomeScreen'
import PokedexScreen from './components/Pokedex/PokedexScreen'
import InfoOfPokemon from './components/Pokemon/InfoOfPokemon'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRouter from './components/ProtectedRouter'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route element={<ProtectedRouter/>}>
          <Route path='/pokedex' element={<PokedexScreen/>}/>
          <Route path='/pokedex/:id' element={<InfoOfPokemon/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
