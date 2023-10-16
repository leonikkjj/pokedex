import { useContext } from "react";
import { PokemonCard } from "../pokemonCard";
import { PokemonContext } from "../../providers/contextPokemon";

export const Main = () => {
  const { pokemons, loading, setLoading, currentPost } =
    useContext(PokemonContext);

  return (
    <>
      <main className="flex items-center flex-col">
        <ul className="flex w-semi flex-wrap gap-6 mt-6 mb-6 items-center justify-center max-w-1300">
          {!loading ? (
            <div className="flex items-center justify-center">
              <p className="text-4xl">Carregando...</p>
            </div>
          ) : (
            currentPost.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.data.name} />
            ))
          )}
        </ul>
      </main>
    </>
  );
};
