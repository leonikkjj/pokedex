import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shinyMode, setShinyMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(30);
  const [itemOffset, setItemOffset] = useState(0);

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
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };
    getPokemon();
  }, []);

  const endOffset = itemOffset + postPerPage;
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / postPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PokemonContext.Provider
        value={{
          pokemons,
          setPokemons,
          loading,
          setLoading,
          postPerPage,
          setCurrentPage,
          shinyMode,
          setShinyMode,
          handlePageClick,
          pageCount,
          currentItems,
        }}
      >
        {children}
      </PokemonContext.Provider>
    </>
  );
}
