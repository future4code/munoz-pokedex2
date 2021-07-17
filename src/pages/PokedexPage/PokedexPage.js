import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToHomePage } from "../../routes/Coordinator";
import { ListContainer } from "./Styled";

const PokedexPage = () => {
  const history = useHistory();
  const { pokedex } = useContext(GlobalStateContext);

  return (
    <>
      <Header
        title={"Pokedex"}
        ControllerButtonMain={() => goToHomePage(history)}
      />
      <ListContainer>
        {pokedex &&
          pokedex.map((pokemon) => {
            return (
              <CardPokemon isPokedex key={pokemon.name} pokemon={pokemon} />
            );
          })}
      </ListContainer>
    </>
  );
};

export default PokedexPage;
