import { useActiveId } from "../hooks/useActiveId";
import { useSearchQueryItems } from "../hooks/useSearchQueryItems";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export default function JobListSearch() {
  const activeId = useActiveId();
  const { jobItemsSortedAndSliced: jobItems, isLoading } = useSearchQueryItems();

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading && jobItems?.map((jobItem) => <JobListItem key={jobItem.id} jobItem={jobItem} isActive={activeId === jobItem.id}></JobListItem>)}
    </ul>
  );
}
