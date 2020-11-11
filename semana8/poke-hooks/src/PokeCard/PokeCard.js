import React, {useEffect, useState} from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});
    // valor do estado que guarda infos e foto do pokemon

  // método que roda após a montagem do componente

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon])

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
      
  return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </div>
  );
}


export default PokeCard;
