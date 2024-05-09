import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useJobItems } from "../hooks/useJobItems";
import { JobItemFull } from "../utils/types";

type BookmarksContextProviderProps = {
  children: React.ReactNode;
};

type TBookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedItems: JobItemFull[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<TBookmarksContext | null>(null);

export default function BookmarksContextProvider({ children }: BookmarksContextProviderProps) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>("bookmarkedIds", []);
  const { jobItems: bookmarkedItems, isLoading } = useJobItems(bookmarkedIds);

  function handleToggleBookmark(id: number) {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((bookmark) => bookmark !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  }

  return (
    <BookmarksContext.Provider value={{ bookmarkedIds, handleToggleBookmark, bookmarkedItems, isLoading }}>{children}</BookmarksContext.Provider>
  );
}
