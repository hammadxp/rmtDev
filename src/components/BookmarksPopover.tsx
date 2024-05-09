import { forwardRef } from "react";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <div className="bookmarks-popover" ref={ref}>
      <JobList />
    </div>
  );
});

export default BookmarksPopover;
