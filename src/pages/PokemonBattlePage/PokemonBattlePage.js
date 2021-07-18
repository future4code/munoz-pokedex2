import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  StyledPokemonDetails,
  PokemonImages,
  DetailPageContainer,
  Details,
} from "./Styled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToPokemonDetailsPage, goToHomePage } from "../../routes/Coordinator";

const PokemonBattlePage = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  const [pokemon, setPokemon] = useState();
  const [rival, setRival] = useState();
  const pathParams = useParams();
  const [damage, setDamage] = useState();
  const [rivalHp, setRivalHp] = useState();
  const [pokemonHp, setPokemonHp] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pokemon/${pathParams.name}`)
      .then((response) => {
        setPokemon(response.data);
        sortRival();
      })
      .catch((err) => {
        console.log("erro", err);
      });
  }, [pathParams]);

  const sortRival = () => {
    const index = randomIndex();
    let pokemonRival = pokemons[index];
    setRival(pokemonRival);
  };

  useEffect(() => {
    {
      rival && setRivalHp(rival.stats[0].base_stat);
    }
    {
      pokemon && setPokemonHp(pokemon.stats[0].base_stat);
    }
  }, [rival, pokemon]);

  useEffect(() => {}, [rivalHp]);
  const randomIndex = () => {
    const max = 29;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const fight = (skill, value) => {
    const rivalDefense = [rival.stats[2].base_stat, rival.stats[4].base_stat];
    let indexDefense;
    if (skill.includes("special")) {
      indexDefense = 1;
    } else {
      indexDefense = 0;
    }
    setDamage((value * 2) / rivalDefense[indexDefense]);
    console.log(damage);
    console.log(rival.stats[0].base_stat);
    if (damage > 1) {
      setRivalHp(Math.floor(rivalHp / damage));
    }
    // if ((skill.includes('special-attack') && value > rivalDefense[1]) || (skill === 'attack' && value > rivalDefense[0])) {
    if (rivalHp <= 0) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Ganaste!!!",
        showConfirmButton: false,
        timer: 800,
      });
    }
    // } else {
    //   Swal.fire({
    //     position: "top-center",
    //     icon: "error",
    //     title: "Perdeu!!!",
    //     showConfirmButton: false,
    //     timer: 800,
    //   });
    // }
  };

  const attacks =
    pokemon &&
    pokemon.stats.filter((stat) => {
      if (stat.stat.name.includes("attack")) {
        return true;
      }
      return false;
    });
  return (
    <>
      <Header
        title={"Batalha Pokemon"}
        ControllerButtonMain={() => goToHomePage(history)}
        ControllerButtonSecond
      />
      <DetailPageContainer>
        <StyledPokemonDetails>
          {pokemon && rival && (
            <>
              <div style={{ height: "500px" }}>
                <PokemonImages>
                  {pokemon.sprites.other.dream_world.front_default ? (
                    <img
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                    />
                  ) : (
                    <img
                      src={pokemon.sprites.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                    />
                  )}
                </PokemonImages>
                <h1>{pokemon.forms[0].name}</h1>
                <Details>
                  {attacks.map((stat) => {
                    return (
                      <button
                        key={stat.stat.name}
                        onClick={() => fight(stat.stat.name, stat.base_stat)}
                        style={{ cursor: "pointer" }}
                      >
                        <strong>{stat.stat.name}: </strong>
                        {stat.base_stat}
                      </button>
                    );
                  })}
                  <h3>{pokemonHp}</h3>
                </Details>
              </div>
              <div
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {rival.sprites.other.dream_world.front_default ? (
                  <img
                    width="120px"
                    src={rival.sprites.other.dream_world.front_default}
                    alt={`imagem frontal do pokémon ${pathParams.name}`}
                    style={{ WebkitTransform: "scaleX(-1)" }}
                  />
                ) : (
                  <img
                    width="120px"
                    src={rival.sprites.front_default}
                    alt={`imagem frontal do pokémon ${pathParams.name}`}
                    style={{ WebkitTransform: "scaleX(-1)" }}
                  />
                )}
                {pokemon.sprites.other.dream_world.back_default ? (
                  <img
                    width="280px"
                    src={pokemon.sprites.other.dream_world.back_default}
                    alt={`imagem do ${pathParams.name} de costas`}
                    style={{ marginRight: "50%" }}
                  />
                ) : (
                  <img
                    width="280px"
                    src={pokemon.sprites.back_default}
                    alt={`imagem do ${pathParams.name} de costas`}
                    style={{ marginRight: "50%" }}
                  />
                )}
              </div>
              <div style={{ height: "500px" }}>
                <PokemonImages>
                  {rival.sprites.other.dream_world.front_default ? (
                    <img
                      src={rival.sprites.other.dream_world.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                      style={{ WebkitTransform: "scaleX(-1)" }}
                    />
                  ) : (
                    <img
                      src={rival.sprites.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                      style={{ WebkitTransform: "scaleX(-1)" }}
                    />
                  )}
                </PokemonImages>
                <h1>{rival.forms[0].name}</h1>
                <h3>{rivalHp}</h3>
                <button
                  onClick={() =>
                    goToPokemonDetailsPage(history, rival.forms[0].name)
                  }
                >
                  {" "}
                  Ver Detalhes{" "}
                </button>
              </div>
            </>
          )}
        </StyledPokemonDetails>
      </DetailPageContainer>
    </>
  );
};

export default PokemonBattlePage;
