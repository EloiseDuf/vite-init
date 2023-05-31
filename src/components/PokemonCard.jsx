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

function PokemonCard(){
    const pokemon=pokemonList[0];
    const picture=pokemon.hasOwnProperty('imgSrc');
   
    return(

<figure>
    <img style={{display: picture ? "inline" : "none"}} src={pokemon.imgSrc}
         alt={pokemon.name}/>
    <p style={{display: picture ? "none" : "inline"}}>???</p>
    <figcaption>{pokemon.name}</figcaption>
</figure>)
}

// autre solution proposé par Abdou:
// function PokemonCard() {
//   const pokemon = pokemonList[1];

//   return (
//     <figure>
//       {pokemon.imgSrc != null ? (
//         <img src={pokemon.imgSrc} alt={pokemon.name} />
//       ) : (
//         <p>???</p>
//       )}
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   );
// }

export default PokemonCard;