import { useContext } from "react";
import poke from "../../assets/poke.png";
import { PokemonContext } from "../../providers/contextPokemon";

export const Header = () => {
  const { shinyMode, setShinyMode } = useContext(PokemonContext);

  const handleShiny = () => {
    shinyMode ? setShinyMode(true) : setShinyMode(false);
  };

  return (
    <>
      <header className="border-b-2 h-36 bg-brand-white flex flex-col justify-center gap-4 items-center sm:justify-between sm:flex-row sm:h-36">
        <img
          className="max-h-16 h-full sm:ml-6 object-contain"
          src={poke}
          alt="Pokemon Logo"
        />
        <input
          type="text"
          placeholder="Procure seu pokemon aqui..."
          className="h-10 w-60 sm:mr-6 pl-2 rounded outline-none"
        />
        <button onClick={() => handleShiny}>modo Shiny</button>
      </header>
    </>
  );
};
