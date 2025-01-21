import useSWRImmutable from "swr";
import { getInfoWalletCreator } from "../api";


export const useWalletCreatorActivity = (address: string) => {
  const { data, isLoading } = useSWRImmutable(
    address ? ["wallet-creator", address] : null,
    address ? () => getInfoWalletCreator(address) : null,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading };
};
