import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokemonDetailsPage } from "../../routes/Coordinator";
import {
  CardContainerMain,
  ImageContainer,
  ImagePokemon,
  ContainerButton,
} from "./Styled";

const CardPokemon = (props) => {
  const history = useHistory();

  return (
    <CardContainerMain>
      <ImageContainer>
        <ImagePokemon
          src={props.pokemon && props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
      </ImageContainer>
      <ContainerButton>
        <button>Adicionar à Pokedex</button>
        <button
          onClick={() =>
            goToPokemonDetailsPage(history, props.pokemon.name)
          }
        >
          Ver detalhes
        </button>
      </ContainerButton>
    </CardContainerMain>
  );
};

export default CardPokemon;
