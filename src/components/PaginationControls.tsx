import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import { usePaginationContext } from "../hooks/useContexts";
import { useSearchQueryItems } from "../hooks/useSearchQueryItems";

export default function PaginationControls() {
  const { currentPage, handlePageChange } = usePaginationContext();
  const { totalPages } = useSearchQueryItems();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <button className="pagination__button pagination__button--previous" onClick={() => handlePageChange("previous")}>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </button>
      )}
      {currentPage < totalPages && (
        <button className="pagination__button pagination__button--next" onClick={() => handlePageChange("next")}>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </button>
      )}
    </section>
  );
}
