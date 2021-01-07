import React, { useEffect, useState} from "react";
import styled from 'styled-components'
import axios from "axios";
import PokeCard from "./PokeCard/PokeCard";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


function App () {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");
    // lista de pokemons que está sendo guardada no estado
    // nome do pokemon guardado no estado, assim que o usuário
    // escolhe um nome no dropdown

  // método que roda após a montagem do componente
  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch(error => {
        console.log(error);
    });
  }, []);

  const changePokeName = event => {
    setPokeName(event.target.value);
  };
    return (
      <Body>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </Body>
    );
  }

export default App;
