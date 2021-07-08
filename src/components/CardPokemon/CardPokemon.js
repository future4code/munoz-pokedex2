import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPokemonDetailsPage } from "../../routes/Coordinator";
import {
  CardContainerMain,
  ImageContainer,
  ImagePokemon,
  ContainerButton,
} from "./Styled";
import axios from 'axios'

const CardPokemon = (props) => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState()
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [])

  return (
    <CardContainerMain>
      <ImageContainer>
        {pokemon &&
          <ImagePokemon src={pokemon.sprites.front_default} alt={`imagem do Pokémon ${props.name}`} />
        }
      </ImageContainer>
      <ContainerButton>
        <button>Adicionar à Pokedex</button>
        <button onClick={() => goToPokemonDetailsPage(history, props.name)}>
          Ver detalhes
        </button>
      </ContainerButton>
    </CardContainerMain>
  );
};

export default CardPokemon;
