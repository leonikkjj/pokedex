import { useContext } from "react";
import { PokemonContext } from "../providers/contextPokemon";

export function usePokemon() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("usePokemon deve ser usado dentro de um PokemonProvider");
  }

  return context;
}
