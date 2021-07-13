import { useHistory } from "react-router-dom";

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};

export const goToPokemonDetailsPage = (history, pokemonName, isPokedex) => {
  isPokedex
    ? history.push(`/pokemon/${pokemonName}/telaPokedex`)
    : history.push(`/pokemon/${pokemonName}`);
};
