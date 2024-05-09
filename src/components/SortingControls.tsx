import { useSortContext } from "../hooks/useContexts";

export default function SortingControls() {
  const { sortBy, handleSortChange } = useSortContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        className={`sorting__button sorting__button--${sortBy} ${sortBy === "relevant" ? "sorting__button--active" : ""}`}
        onClick={() => handleSortChange("relevant")}
      >
        Relevant
      </button>

      <button
        className={`sorting__button sorting__button--${sortBy} ${sortBy === "recent" ? "sorting__button--active" : ""}`}
        onClick={() => handleSortChange("recent")}
      >
        Recent
      </button>
    </section>
  );
}
