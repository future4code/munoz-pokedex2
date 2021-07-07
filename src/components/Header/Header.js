import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/Coordinator";
import {
  ContainerMain,
  ControllerButtonOne,
  ControllerButtonTwo,
} from "./Styled";

const Header = ({ ControllerButtonMain, title, ControllerButtonSecond }) => {
  const history = useHistory();

  const ButtonHeader = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Ir para Pokedex";
      case "Pokedex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar para lista de pokemons";
    }
  };

  return (
    <ContainerMain>
      <ControllerButtonOne onClick={ControllerButtonMain}>
        {ButtonHeader()}
      </ControllerButtonOne>
      <h1>{title}</h1>
      {ControllerButtonSecond && (
        <ControllerButtonTwo onClick={() => goToPokedexPage(history)}>
          Ir para pokedex
        </ControllerButtonTwo>
      )}
    </ContainerMain>
  );
};

export default Header;
