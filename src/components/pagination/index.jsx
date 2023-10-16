import { usePokemon } from "../../hooks/usePokemon";

export function Pagination() {
  const { pokemons, postPerPage, setCurrentPage } = usePokemon();
  const totalPost = pokemons.length;

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="flex gap-4 w-full justify-center mb-6 flex-wrap">
        {pages.map((page, index) => {
          return (
            <button
              className="flex border w-8 items-center justify-center mb-9 border-solid border-1 bg-back transition duration-300 hover:border-red-500"
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
}
