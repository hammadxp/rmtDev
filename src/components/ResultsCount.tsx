import { useSearchQueryItems } from "../hooks/useSearchQueryItems";

export default function ResultsCount() {
  const { totalResults } = useSearchQueryItems();

  return (
    <p className="count">
      <span className="u-bold">{totalResults}</span> results
    </p>
  );
}
