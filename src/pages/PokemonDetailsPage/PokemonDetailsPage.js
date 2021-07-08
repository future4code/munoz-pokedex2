import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { StyledPokemonDetails, PokemonImages } from "./Styled";
import axios from 'axios'

const PokemonDetailsPage = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState()
  const pokemonName = 'bulbasaur'
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [])
  console.log('pokemon', pokemon)
  return (
    <>
      <Header
        title={"Detalhes do Pokemon"}
        ControllerButtonMain={() => history.goBack()}
        ControllerButtonSecond
      />
      <StyledPokemonDetails>
        {pokemon &&
          <>
            <h1>{pokemon.forms[0].name}</h1>
            <p><strong>Tipo: </strong>{pokemon.types.map((type) => { return type.type.name + " " })}</p>
            <PokemonImages>
              <img src={pokemon.sprites.front_default} alt={'Imagem frontal'} />
              <img src={pokemon.sprites.back_default} alt={'Imagem de costas'} />
            </PokemonImages>
            <section>
              {pokemon.stats.map((stat) => {
                return <p><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
              })}
            </section>

            <section>
              <h3>Ataques</h3>
              {pokemon.moves.map((move) => {
                return <p>{move.move.name}</p>
              })}
            </section>
          </>
        }
      </StyledPokemonDetails>
    </>
  );
};

export default PokemonDetailsPage;
