import { getCAInfo } from "@/api";
import useSWRImmutable from "swr";

export const useCAInfo = (caAddress: string) => {
  const { data, isLoading } = useSWRImmutable(
    caAddress ? ["ca", caAddress] : null,
    caAddress ? () => getCAInfo(caAddress) : null,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true
    }
  );
  return { data, isLoading };
};
