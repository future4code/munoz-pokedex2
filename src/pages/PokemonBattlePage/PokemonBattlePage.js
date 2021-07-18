import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  StyledPokemonBattle,
  PokemonImages,
  BattlePageContainer,
  Details,
} from "./Styled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToPokemonDetailsPage, goToHomePage } from "../../routes/Coordinator";

const PokemonBattlePage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const { pokemons } = useContext(GlobalStateContext);
  const [pokemon, setPokemon] = useState();
  const [rival, setRival] = useState();
  const [rivalDamage, setRivalDamage] = useState();
  const [pokemonDamage, setPokemonDamage] = useState();
  const [rivalHp, setRivalHp] = useState();
  const [pokemonHp, setPokemonHp] = useState();

  const sortRival = () => {
    const index = randomIndex();
    let pokemonRival = pokemons[index];
    setRival(pokemonRival);
  };

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
  }, []);

  useEffect(() => {
     rival && setRivalHp(rival.stats[0].base_stat) 
     pokemon && setPokemonHp(pokemon.stats[0].base_stat) 
  }, [rival, pokemon]);

  useEffect(() => {
    if (rivalDamage > 1) {
      setRivalHp(Math.floor(rivalHp / rivalDamage));
    }
  }, [rivalDamage])

  useEffect(() => {
    if (rival && rivalHp > 0 && rivalDamage) {
      const damageValue = ((rival.stats[0].base_stat) - rivalHp)
      Swal.fire({
        position: "center",
        icon: "info",
        title: `o seu ${pokemon.forms[0].name} causou ${damageValue} de dano no ${rival.forms[0].name}`,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => rivalAttack())
    } else if (rivalHp <= 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `o seu ${pokemon.forms[0].name} venceu!!!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setRivalDamage(false)
  }, [rivalHp])

  useEffect(() => {
    if (pokemonHp > 0 && pokemon && pokemonDamage) {
      let damageValue = ((pokemon.stats[0].base_stat) - pokemonHp)
      Swal.fire({
        position: "center",
        icon: "info",
        title: `o seu ${pokemon.forms[0].name} sofreu ${damageValue} de dano do ${rival.forms[0].name}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (pokemonHp <= 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `o seu ${pokemon.forms[0].name} perdeu a batalha!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    setPokemonDamage(false)
  }, [pokemonHp])

  useEffect(() => {
    if (pokemonDamage !== 0 && pokemonDamage > 1) {
      setPokemonHp(Math.floor(pokemonHp / pokemonDamage));
    }
  }, [pokemonDamage])

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
    setRivalDamage((value * 2) / rivalDefense[indexDefense]);
  };
  const rivalAttack = () => {
    const rivalAttackArray = [rival.stats[1].base_stat, rival.stats[3].base_stat]
    const pokemonDefense = [pokemon.stats[2].base_stat, pokemon.stats[4].base_stat]
    const randomIndexBattle = Math.floor(Math.random(0, 2));
    setPokemonDamage((rivalAttackArray[randomIndexBattle] * 2) / pokemonDefense[randomIndexBattle]);
  }

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
      <BattlePageContainer>
        <StyledPokemonBattle>
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
                  <h3>HP: {pokemonHp}</h3>
                  {attacks.map((stat) => {
                    return (
                      <button
                        key={stat.stat.name}
                        onClick={() => fight(stat.stat.name, stat.base_stat)}
                        style={{ cursor: "pointer" }}>
                        <strong>{stat.stat.name}: </strong>
                        {stat.base_stat}
                      </button>
                    );
                  })}
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
                    alt={`imagem frontal do pokémon ${rival.forms[0].name}`}
                    style={{ WebkitTransform: "scaleX(-1)" }}
                  />
                ) : (
                  <img
                    width="120px"
                    src={rival.sprites.front_default}
                    alt={`imagem frontal do pokémon ${rival.forms[0].name}`}
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
                <Details>
                  <h3>HP: {rivalHp}</h3>
                  <button
                    onClick={() => goToPokemonDetailsPage(history, rival.forms[0].name)}> Ver Detalhes </button>
                  <button
                    onClick={sortRival}> Trocar Rival </button>
                </Details>

              </div>
            </>
          )}
        </StyledPokemonBattle>
      </BattlePageContainer>
    </>
  );
};

export default PokemonBattlePage
