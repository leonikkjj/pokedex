import { usePokemon } from "../../hooks/usePokemon";

export function PokemonCard({ pokemon }) {
  const { shinyMode, setShinyMode } = usePokemon();

  const getTextColor = (text) => {
    if (text == "grass") {
      return "bg-[#78c850] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "fire") {
      return "bg-[#f05030] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "water") {
      return "bg-[#6890f0] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "flying") {
      return "bg-[#a890f0] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "electric") {
      return "bg-[#f8d030] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "poison") {
      return "bg-[#a040a0] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "fighting") {
      return "bg-[#903028] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "normal") {
      return "bg-[#a8a878] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "ground") {
      return "bg-[#e0c068] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "rock") {
      return "bg-[#b8a038] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "psychic") {
      return "bg-[#f85888] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "ice") {
      return "bg-[#98d8d8] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "ghost") {
      return "bg-[#705898] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "steel") {
      return "bg-[#b8b8d0] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "dragon") {
      return "bg-[#7038f8] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "dark") {
      return "bg-[#705848] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "bug") {
      return "bg-[#A8B820] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
    if (text == "fairy") {
      return "bg-[#EE99AC] text-white font-medium w-[70px] rounded flex justify-center items-center";
    }
  };

  return (
    <>
      <li className="flex rounded border border-solid border-1 bg-back transition duration-300 hover:border-red-500 ">
        <section className="flex flex-col items-center">
          <img
            className="bg-slate-200  rounded-t w-44 h-44"
            src={
              shinyMode
                ? pokemon.data.sprites.front_shiny
                : pokemon.data.sprites.front_default
            }
            alt={pokemon.data.name}
          />
          <div className="h-[60px] w-full flex flex-col items-center justify-center">
            <p className="font-semibold text-lg text-gray-600">
              {pokemon.data.name}
            </p>
            <div className="flex gap-[7px] justify-center w-full">
              {pokemon.data.types.map((item, index) => {
                return (
                  <div key={index}>
                    <p className={getTextColor(item.type.name)}>
                      {item.type.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </li>
    </>
  );
}
