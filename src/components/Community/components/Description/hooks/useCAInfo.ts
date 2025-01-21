import { getCAInfo, getCAInfoSuiAndTokenMain } from "@/api";
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


export const useCASuiAIAndTokenMainInfo = (caAddress: string[]) => {
  const { data, isLoading } = useSWRImmutable(
    caAddress ? ["ca-sui-ai-token-main", caAddress] : null,
    caAddress ? () => getCAInfoSuiAndTokenMain(caAddress) : null,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true
    }
  );
  return { data, isLoading };
};
