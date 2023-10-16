import { usePokemon } from "../../hooks/usePokemon";

export function PokemonCard({ pokemon }) {
  const { shinyMode, setShinyMode } = usePokemon();

  return (
    <>
      <li className="flex rounded border border-solid border-1 bg-back transition duration-300 hover:border-red-500 ">
        <section className="flex flex-col items-center">
          <img
            className="bg-gray-100 rounded  w-44 h-44"
            src={
              shinyMode
                ? pokemon.data.sprites.front_shiny
                : pokemon.data.sprites.front_default
            }
            alt={pokemon.data.name}
          />
          <div className="h-10 flex flex-col items-center justify-center">
            <p className="font-semibold text-lg">{pokemon.data.name}</p>
          </div>
        </section>
      </li>
    </>
  );
}
