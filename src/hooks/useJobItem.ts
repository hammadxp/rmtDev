import { API_BASE_URL } from "../utils/const";
import { JobItemFull } from "../utils/types";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils/utils";

export async function fetchJobItem(id: number) {
  const res = await fetch(`${API_BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error("An error occured while fetching job item.");
  }

  const data = await res.json();

  return data;
}

export function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(["job-item", id], () => (id ? fetchJobItem(id) : null), {
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
    retry: false,
    enabled: Boolean(id),
    onError: handleError,
  });

  const jobItem = data?.jobItem as JobItemFull;
  const isLoading = isInitialLoading;

  return { jobItem, isLoading };
}

// const [jobItem, setJobItem] = useState<JobItemFull | null>(null);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   if (!id) return;

//   const fetchData = async function () {
//     setIsLoading(true);

//     const res = await fetch(`${API_BASE_URL}/${id}`);
//     const data = await res.json();

//     setJobItem(data.jobItem);
//     setIsLoading(false);
//   };

//   fetchData();
// }, [id]);
