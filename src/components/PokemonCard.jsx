
// function PokemonCard(props){
//     const pokemon={
//       name:props.name,
//       imgSrc:props.imgSrc
//     }
  
//   const picture=pokemon.hasOwnProperty('imgSrc');
//    console.log(props);
    
//    return(

// <figure>
//     <img style={{display: picture ? "inline" : "none"}} src={pokemon.imgSrc}
//          alt={pokemon.name}/>
//     {/* <p style={{display: picture ? "none" : "inline"}}>???</p> */}
//     <figcaption>{pokemon.name}</figcaption>
// </figure>)
// }

function PokemonCard(props) {
  const pokemon={
          name:props.name,
          imgSrc:props.imgSrc
        }
      
  return (
    <figure>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;