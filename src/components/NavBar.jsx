import App from "../App"

const NavBar =({state,pokemonList}) => {

    const[pokemonIndex,setPokemonIndex]=state;

return (
    <>
{pokemonList.map((pokemon,index)=> (
    <button key={index} onClick={()=>setPokemonIndex(index)}>{pokemon.name}</button>
))}
    </>
)

}

export default NavBar;