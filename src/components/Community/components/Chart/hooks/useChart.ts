import useSWRImmutable from "swr";
import { getChart } from "../api";

export const useChart = (pool: string) => {
  const { data, isLoading } = useSWRImmutable(
    pool ? ["chart", pool] : null,
    pool ? () => getChart(pool) : null,
    {
      revalidateOnFocus: false,
      refreshInterval: 60000,
    }
  );
  return { data, isLoading };
};
