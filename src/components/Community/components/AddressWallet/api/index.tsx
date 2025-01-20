import { apiEndpoints } from "@/config";

import axios from "axios";

export const getInfoWallet = async (address: string) => {
  try {
    if (address) {
      const url = `${apiEndpoints.nextApi}/wallet-info/${address}`;
      const res = await axios.get(url);
      return res?.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};
