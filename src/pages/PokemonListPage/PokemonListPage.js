import React from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import { ListContainer } from "./Styled";

const PokemonListPage = () => {
  const history = useHistory();

  return (
    <>
      <Header
        title={"Lista de Pokemons"}
        ControllerButtonMain={() => goToPokedexPage(history)}
      />
      <ListContainer>
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
      </ListContainer>
    </>
  );
};

export default PokemonListPage;
