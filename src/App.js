import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const [currentPageUrl, setCurrentPageUrl] = useState("");

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [currentPageUrl]);

  return <PokemonList pokemon={pokemon} />;
}

export default App;
