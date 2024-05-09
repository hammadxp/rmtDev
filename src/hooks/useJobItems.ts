import { useQueries } from "@tanstack/react-query";
import { fetchJobItem } from "./useJobItem";
import { JobItemFull } from "../utils/types";
import { handleError } from "../utils/utils";
import { useMemo } from "react";

export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = useMemo(() => {
    return results.map((result) => result.data?.jobItem as JobItemFull).filter((jobItem) => jobItem !== undefined);
  }, [results]);
  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading };
}
