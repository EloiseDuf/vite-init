import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'
import { useEffect } from 'react'

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

  useEffect(
    () => {
    alert(`hello pokemon trainer :)`)
},
[]
  );

  useEffect(
    () => {
    pokemonIndex==3 ? alert('pika!pika!pikachu!!!!') : <p></p>
},
[pokemonIndex]
  );

  return (
    <>
      <PokemonCard name={pokemonList[pokemonIndex].name} imgSrc={pokemonList[pokemonIndex].imgSrc}  />
      <NavBar previousClick={previousClick} nextClick={nextClick} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>
    </>
  )
  
}


export default  App