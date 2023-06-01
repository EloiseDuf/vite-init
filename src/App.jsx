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
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  const previousClick = () => {
    setPokemonIndex(pokemonIndex-1)
  }

  const nextClick= () => {
    setPokemonIndex(pokemonIndex+1)
  }

  return (
    <>
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc}  />
    {pokemonIndex>0 ? <button onClick={previousClick}>Previous</button> : <p></p> }
    {pokemonIndex<pokemonList.length-1? <button onClick={nextClick}>Next</button> : <p></p>}
    </>
  )
}

export default App
