import poke from "../../assets/poke.png";
import { usePokemon } from "../../hooks/usePokemon";

export function Header() {
  const { shinyMode, setShinyMode } = usePokemon();

  const handleShiny = () => {
    setShinyMode(shinyMode == false ? true : false);
  };

  return (
    <>
      <header className="border-b-2 h-44 bg-brand-white flex flex-col justify-center gap-4 items-center sm:justify-between sm:flex-row sm:h-36">
        <img
          className="max-h-16 h-full sm:ml-6 object-contain"
          src={poke}
          alt="Pokemon Logo"
        />
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Procure seu pokemon aqui..."
            className="h-10 w-60 sm:mr-6 pl-2 rounded outline-none"
          />
          <button
            className="border rounded border-solid sm:mr-6 border-1 bg-white transition duration-300 hover:border-red-500"
            onClick={handleShiny}
          >
            modo Shiny
          </button>
        </div>
      </header>
    </>
  );
}
