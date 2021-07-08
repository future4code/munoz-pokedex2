import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import { ListContainer } from "./Styled";
import axios from "axios";


const PokemonListPage = () => {
  const history = useHistory();
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then((response) => {
        setPokemonList(response.data.results)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [])

  return (
    <>
      <Header
        title={"Lista de Pokemons"}
        ControllerButtonMain={() => goToPokedexPage(history)}
      />
      <ListContainer>
        {pokemonList.length>0 &&
        pokemonList.map((pokemon)=> {
          return <CardPokemon name={pokemon.name} key={pokemon.url}/>
        })
        }
{/*         
        <CardPokemon />
        <CardPokemon />
        <CardPokemon /> */}
      </ListContainer>
    </>
  );
};

export default PokemonListPage;
