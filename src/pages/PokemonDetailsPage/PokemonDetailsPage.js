import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import { StyledPokemonDetails, PokemonImages, Page } from "./Styled";
import axios from 'axios'
import { BASE_URL } from "../../constants/url";

const PokemonDetailsPage = () => {
  const history = useHistory();
  const [pokemon, setPokemon] = useState()
  const pathParams = useParams()
  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon/${pathParams.name}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }, [pathParams])
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
                return <p key={stat.stat.name}><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
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
