import React, { createContext, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

type SearchQueryContextProviderProps = {
  children: React.ReactNode;
};

type TSearchQueryContext = {
  searchQuery: string;
  debouncedSearchQuery: string;
  handleSearchQueryChange: (newSearchQuery: string) => void;
};

export const SearchQueryContext = createContext<TSearchQueryContext | null>(null);

export default function SearchQueryContextProvider({ children }: SearchQueryContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  function handleSearchQueryChange(newQuery: string) {
    setSearchQuery(newQuery);
  }

  return <SearchQueryContext.Provider value={{ searchQuery, debouncedSearchQuery, handleSearchQueryChange }}>{children}</SearchQueryContext.Provider>;
}
