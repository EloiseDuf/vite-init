import App from "../App"

const NavBar =({pokemonIndex,previousClick,nextClick,pokemonList}) => {
    
return (
    <>
{pokemonIndex>0 ? <button onClick={previousClick}>Previous</button> : <p></p> }
{pokemonIndex<pokemonList.length-1? <button onClick={nextClick}>Next</button> : <p></p>}
    </>
)

}

export default NavBar;