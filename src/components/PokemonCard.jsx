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
    const picture=pokemonList[pokemon].hasOwnProperty('imgSrc');

    return(

<figure>
  
    <img style={{display: picture ? "inline" : "none"}} src={pokemonList[pokemon].imgSrc}
         alt={pokemonList[pokemon].name}/>
    <p style={{display: picture ? "none" : "inline"}}>???</p>
    <figcaption>{pokemonList[pokemon].name}</figcaption>
</figure>)
}

export default PokemonCard;