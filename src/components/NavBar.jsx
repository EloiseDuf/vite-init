import App from "../App"

const NavBar =({pokemonIndex,setPokemonIndex,pokemonList}) => {
const previousClick = () => {
    setPokemonIndex(pokemonIndex-1)
  }

  const nextClick= () => {
    setPokemonIndex(pokemonIndex+1)
  }
return (
    <>
{pokemonIndex>0 ? <button onClick={previousClick}>Previous</button> : <p></p> }
{pokemonIndex<pokemonList.length-1? <button onClick={nextClick}>Next</button> : <p></p>}
    </>
)
}

export default NavBar;