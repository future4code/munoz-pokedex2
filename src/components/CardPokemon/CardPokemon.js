import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetailsPage } from "../../routes/Coordinator";
import {
  CardContainerMain,
  ImageContainer,
  ImagePokemon,
  ContainerButton,
} from "./Styled";
import Swal from "sweetalert2";

const CardPokemon = (props) => {
  const history = useHistory();
  const { pokemons, setPokemons, pokedex, setPokedex } =
    useContext(GlobalStateContext);

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.pokemon.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Pokemon adicionado à pokedex",
      showConfirmButton: false,
      timer: 800,
    });
  };

  const removeFromPokedex = () => {
    Swal.fire({
      title: "Você quer remover este pokemon da pokedex?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        const pokeIndex = pokedex.findIndex(
          (item) => item.name === props.pokemon.name
        );
        const newPokedexList = [...pokedex];
        newPokedexList.splice(pokeIndex, 1);
        const orderedPokedex = newPokedexList.sort((a, b) => {
          return a.id - b.id;
        });

        const newPokemonList = [...pokemons, props.pokemon];
        const orderedPokemons = newPokemonList.sort((a, b) => {
          return a.id - b.id;
        });

        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons);
        Swal.fire("Pokemon Removido!");
      } else if (!result.isConfirmed) {
        Swal.fire("Pokemon Não Removido");
      }
    });
  };

  return (
    <CardContainerMain>
      <ImageContainer>
        <ImagePokemon
          src={props.pokemon && props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
      </ImageContainer>
      <ContainerButton>
        <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
          {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </button>
        <button
          onClick={() => goToPokemonDetailsPage(history, props.pokemon.name)}
        >
          Ver detalhes
        </button>
      </ContainerButton>
    </CardContainerMain>
  );
};

export default CardPokemon;
