import React, { createContext, useState } from "react";

type PaginationContextProviderProps = {
  children: React.ReactNode;
};

type TPaginationContext = {
  currentPage: number;
  handlePageChange: (direction: "previous" | "next") => void;
  resetPagination: () => void;
};

export const PaginationContext = createContext<TPaginationContext | null>(null);

export default function PaginationContextProvider({ children }: PaginationContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(direction: "previous" | "next") {
    if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function resetPagination() {
    setCurrentPage(1);
  }

  return <PaginationContext.Provider value={{ currentPage, handlePageChange, resetPagination }}>{children}</PaginationContext.Provider>;
}
