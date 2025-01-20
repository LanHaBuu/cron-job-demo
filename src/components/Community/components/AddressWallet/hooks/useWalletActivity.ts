import useSWRInfinite from "swr/infinite";
import axios from "axios";
import { apiEndpoints } from "@/config";
import { useMemo } from "react";

const fetchWalletActivity = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useWalletActivity = (address: string) => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (!address) return null;
    if (previousPageData && !previousPageData.nextPageCursor) return null;

    if (pageIndex === 0) {
      return `${apiEndpoints.nextApi}/wallet-activity/${address}`;
    }

    return `${apiEndpoints.nextApi}/wallet-activity/${address}?cursor=${previousPageData.nextPageCursor}`;
  };

  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite(
    getKey,
    fetchWalletActivity,
    {
      revalidateOnFocus: false,
    }
  );



  const activities = useMemo(() => {
    return data ? data.flatMap((page) => page.data) : [];
  }, [data]);

const hasNextPage = useMemo(() => {
  return data?.[data.length - 1]?.nextPageCursor;
}, [data]);



  return {
    data: activities,
    isLoading: isLoading || isValidating,
    loadMore: () => setSize(size + 1),
    hasNextPage,
  };
};
