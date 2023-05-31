import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew"
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}  />
    </>
  )
}

export default App
