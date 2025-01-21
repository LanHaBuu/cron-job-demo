import { apiEndpoints } from "@/config";

import axios from "axios";

export const getPairDexScreenerInfo = async (address: string) => {
  try {
    if (address) {
      const url = `${apiEndpoints.nextApi}/pair-info/${address}`;
      const res = await axios.get(url);
      return res?.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};
