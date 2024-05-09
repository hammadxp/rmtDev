import { useSearchQueryContext } from "../hooks/useContexts";

export default function SearchForm() {
  const { searchQuery, handleSearchQueryChange } = useSearchQueryContext();

  return (
    <form action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
