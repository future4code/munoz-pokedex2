import React from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import {} from "./Styled";

const PokemonDetailsPage = () => {
  const history = useHistory();

  return (
    <>
      <Header
        title={"Detalhes do Pokemon"}
        ControllerButtonMain={() => history.goBack()}
        ControllerButtonSecond
      />
    </>
  );
};

export default PokemonDetailsPage;
