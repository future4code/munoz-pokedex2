import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import { goToHomePage } from "../../routes/Coordinator";
import {} from "./Styled";

const PokedexPage = () => {
  const history = useHistory();

  return (
    <>
      <Header
        title={"Pokedex"}
        ControllerButtonMain={() => goToHomePage(history)}
      />
    </>
  );
};

export default PokedexPage;
