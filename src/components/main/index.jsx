import { PokemonCard } from "../pokemonCard";
import { usePokemon } from "../../hooks/usePokemon";

export function Main() {
  const { pokemons, loading, setLoading, currentItems, filterPokemons } =
    usePokemon();
  const skeletonRender = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <>
      <main className="flex items-center flex-col min-h-[1232px]">
        <ul className="flex w-semi flex-wrap gap-6 mt-6 mb-6 items-center justify-center max-w-1300">
          {loading
            ? skeletonRender.map((item) => (
                <div
                  key={item}
                  className="border border-solid border-1 bg-back w-44 h-[216px] shadow rounded-t"
                >
                  <div className="animate-pulse flex flex-col">
                    <div className="rounded-t bg-slate-700 w-full h-44"></div>
                    <div className="flex-1 py-1">
                      <div className="space-y-2 flex flex-col justify-center items-center w-full h-[60px] max-h-10">
                        <div className="h-2 w-[95%] bg-slate-700 rounded"></div>
                        <div className="h-2 w-[95%] bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : currentItems.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.data.name} />
              ))}
        </ul>
      </main>
    </>
  );
}
