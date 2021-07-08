import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Topo } from './Styled.js'
import Logo from '../../img/logo.png' 
import { goToPokedexPage } from '../../routes/Coordinator'

const PokedexPage = () => {

  const history = useHistory();

  return (
    <Container>
      <Topo>
        <button onClick={() => history.push("/")}>Lista de Pokemons</button>
        <img src={Logo}></img>
      </Topo>

    </Container>
  );
};

export default PokedexPage;
