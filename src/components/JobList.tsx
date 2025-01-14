import { useActiveId } from "../hooks/useActiveId";
import { useBookmarksContext } from "../hooks/useContexts";
import { useJobItems } from "../hooks/useJobItems";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList() {
  const activeId = useActiveId();
  const { bookmarkedIds } = useBookmarksContext();
  const { jobItems, isLoading } = useJobItems(bookmarkedIds);

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading && jobItems?.map((jobItem) => <JobListItem key={jobItem.id} jobItem={jobItem} isActive={activeId === jobItem.id}></JobListItem>)}
    </ul>
  );
}

export default JobList;
