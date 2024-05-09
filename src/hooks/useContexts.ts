import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";
import { SearchQueryContext } from "../contexts/SearchQueryContextProvider";
import { SortContext } from "../contexts/SortContextProvider";
import { PaginationContext } from "../contexts/PaginationContextProvider";

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error("useContext(BookmarksContext) must be used within BookmarksContextProvider.");
  }

  return context;
}

export function useSortContext() {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error("useContext(SortContext) must be used within SortContextProvider.");
  }

  return context;
}

export function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error("useContext(PaginationContext) must be used within PaginationContextProvider.");
  }

  return context;
}

export function useSearchQueryContext() {
  const context = useContext(SearchQueryContext);

  if (!context) {
    throw new Error("useContext(SearchQueryContext) must be used within SearchQueryContextProvider.");
  }

  return context;
}
