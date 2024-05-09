import React, { createContext, useState } from "react";
import { usePaginationContext } from "../hooks/useContexts";

type SortContextProviderProps = {
  children: React.ReactNode;
};

type TSortContext = {
  sortBy: "relevant" | "recent";
  handleSortChange: (newSort: "relevant" | "recent") => void;
};

export const SortContext = createContext<TSortContext | null>(null);

export default function SortContextProvider({ children }: SortContextProviderProps) {
  const [sortBy, setSortBy] = useState<"relevant" | "recent">("relevant");
  const { resetPagination } = usePaginationContext();

  function handleSortChange(newSort: "relevant" | "recent") {
    resetPagination();
    setSortBy(newSort);
  }

  return <SortContext.Provider value={{ sortBy, handleSortChange }}>{children}</SortContext.Provider>;
}
