import ReactPaginate from "react-paginate";
import { usePokemon } from "../../hooks/usePokemon";
import { Main } from "../main";

export function PaginatedItems({ itemsPerPage }) {
  const { handlePageClick, pageCount, currentItems } = usePokemon();
  return (
    <>
      <Main />
      <ReactPaginate
        className="flex justify-center gap-7 mb-14 text-xl flex-wrap "
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
