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
    const pokemon=1;

return(

<figure>
    <img src={pokemonList[pokemon].imgSrc}
         alt={pokemonList[pokemon].name}/>
    <figcaption>{pokemonList[pokemon].name}</figcaption>
</figure>)
}

export default PokemonCard;