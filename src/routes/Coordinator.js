import { useHistory } from "react-router-dom";

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokedexPage = (history) => {
  history.push("/pokedex");
};

export const goToPokemonDetailsPage = (history, pokemonName) => {
  history.push(`/pokemon/${pokemonName}`);
};
