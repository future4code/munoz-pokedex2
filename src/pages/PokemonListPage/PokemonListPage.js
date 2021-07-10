import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import { ListContainer } from "./Styled";
import GlobalStateContext from "../../global/GlobalStateContext";

const PokemonListPage = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  return (
    <>
      <Header
        title={"Lista de Pokemons"}
        ControllerButtonMain={() => goToPokedexPage(history)}
      />
      <ListContainer>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <CardPokemon pokemon={pokemon} key={pokemon.name} />;
          })}
      </ListContainer>
    </>
  );
};

export default PokemonListPage;
