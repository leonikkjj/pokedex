import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shinyMode, setShinyMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(30);

  useEffect(() => {
    const getPokemon = async () => {
      let endPoints = [];
      for (let x = 1; x < 1011; x++) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${x}/`);
      }
      try {
        let response = await axios.all(
          endPoints.map((endPoint) => axios.get(endPoint))
        );
        setPokemons(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(true);
      }
    };
    getPokemon();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = pokemons.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <PokemonContext.Provider
        value={{
          pokemons,
          setPokemons,
          loading,
          setLoading,
          currentPost,
          postPerPage,
          setCurrentPage,
          shinyMode,
          setShinyMode,
        }}
      >
        {children}
      </PokemonContext.Provider>
    </>
  );
}
