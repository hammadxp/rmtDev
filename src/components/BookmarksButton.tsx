import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import BookmarksPopover from "./BookmarksPopover";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  const bookmarkButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([bookmarkButtonRef, popoverRef], () => setIsOpen(false));

  return (
    <section>
      <button onClick={() => setIsOpen(true)} ref={bookmarkButtonRef} className="bookmarks-btn">
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
