import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../hooks/useContexts";

type BookmarkIcon = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIcon) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      className="bookmark-btn"
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon className={`${bookmarkedIds.includes(id) ? "filled" : ""}`} />
    </button>
  );
}
