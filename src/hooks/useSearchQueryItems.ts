import { API_BASE_URL, RESULTS_PER_PAGE } from "../utils/const";
import { JobItem } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils/utils";
import { usePaginationContext, useSearchQueryContext, useSortContext } from "./useContexts";
import { useMemo } from "react";

async function fetchJobItems(query: string) {
  const res = await fetch(`${API_BASE_URL}?search=${query}`);

  if (!res.ok) {
    throw new Error("An error occured while searching for the requested query.");
  }

  const data = await res.json();

  return data;
}

export function useSearchQueryItems() {
  const { sortBy } = useSortContext();
  const { currentPage } = usePaginationContext();
  const { debouncedSearchQuery: query } = useSearchQueryContext();

  const { data, isInitialLoading } = useQuery(["job-items", query], () => (query ? fetchJobItems(query) : null), {
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    retry: false,
    enabled: Boolean(query),
    onError: handleError,
  });

  const jobItems = data?.jobItems as JobItem[];
  const isLoading = isInitialLoading;

  const jobItemsSorted = [...(jobItems || [])].sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore;
    } else {
      return a.daysAgo - b.daysAgo;
    }
  });

  const jobItemsSortedAndSliced = useMemo(() => {
    return jobItemsSorted?.slice(currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);
  }, [currentPage, jobItemsSorted]);

  const totalResults = jobItems?.length || 0;
  const totalPages = totalResults / RESULTS_PER_PAGE;

  return { jobItemsSortedAndSliced, isLoading, totalResults, totalPages };
}

// useEffect(() => {
//   if (!query) return;

//   const fetchData = async function () {
//     setIsLoading(true);

//     const res = await fetch(`${API_BASE_URL}?search=${query}`);
//     const data = await res.json();

//     setJobItems(data.jobItems);
//     setIsLoading(false);
//   };

//   fetchData();
// }, [query]);
