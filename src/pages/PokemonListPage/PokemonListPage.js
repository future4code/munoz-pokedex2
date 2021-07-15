import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import { Container, ListContainer, ContainerPagination } from "./Styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import Pagination from "@material-ui/lab/Pagination";

const PokemonListPage = () => {
  const history = useHistory();
  const { pokemons, currentPage, setCurrentPage } =
    useContext(GlobalStateContext);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
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
      <ContainerPagination>
        <Pagination
          count={38}
          color="secondary"
          size="large"
          page={currentPage}
          onChange={handleChange}
        />
      </ContainerPagination>
    </Container>
  );
};

export default PokemonListPage;
