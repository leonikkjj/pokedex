import { useContext } from "react";
import { PokemonContext } from "../../providers/contextPokemon";

export const PokemonCard = ({ pokemon }) => {
  const { shinyMode, setShinyMode } = useContext(PokemonContext);
  console.log(pokemon);
  return (
    <>
      <li className="flex border border-solid border-1 bg-back transition duration-300 hover:border-red-500 ">
        <section className="flex flex-col items-center">
          <img
            className="bg-gray-100 w-44 h-44"
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
};
