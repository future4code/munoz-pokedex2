import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonListPage from "../pages/PokemonListPage/PokemonListPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonListPage} />
        <Route exact path="/pokedex" component={PokedexPage} />
        <Route exact path="/pokemon" component={PokemonDetailsPage} />
        <Route>
          <div>Erro 404 - Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
