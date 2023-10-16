import { PokemonCard } from "../pokemonCard";
import { usePokemon } from "../../hooks/usePokemon";

export function Main() {
  const { pokemons, loading, setLoading, currentPost } = usePokemon();

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
}
