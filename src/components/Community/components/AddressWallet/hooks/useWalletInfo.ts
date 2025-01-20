import useSWRImmutable from "swr";
import { getInfoWallet } from "../api";


export const useWalletInfo = (address: string) => {
  const { data, isLoading } = useSWRImmutable(
    address ? ["wallet", address] : null,
    address ? () => getInfoWallet(address) : null,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading };
};
