import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokemonDetailsPage } from "../../routes/Coordinator";
import {
  CardContainerMain,
  ImageContainer,
  ImagePokemon,
  ContainerButton,
} from "./Styled";

const CardPokemon = () => {
  const history = useHistory();
  return (
    <CardContainerMain>
      <ImageContainer>
        <ImagePokemon src={"imagem"} alt={"imagem"} />
      </ImageContainer>
      <ContainerButton>
        <button>Adicionar à Pokedex</button>
        <button onClick={() => goToPokemonDetailsPage(history)}>
          Ver detalhes
        </button>
      </ContainerButton>
    </CardContainerMain>
  );
};

export default CardPokemon;
