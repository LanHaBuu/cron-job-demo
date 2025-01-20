import { getPrice } from "@/api";
import { ADDRESS_SUI, ADDRESS_SUI_AI, apiEndpoints } from "@/config";

import axios from "axios";

export const getChart = async (pool: string) => {
  try {
    if (pool) {
      const url = `${apiEndpoints.nextApi}/chart/${pool}`;
      const res = await axios.get(url);
      const price = await getPrice()
      const suiPrice = Number(price[ADDRESS_SUI]?.price)
      
      return res?.data?.chartData?.map((item:any) => {
        return {
          ...item,
          low: item?.low * suiPrice,
          high: item?.high * suiPrice,
          open: item?.open * suiPrice,
          close: item?.close * suiPrice
        }
      })
    }
    return null;
  } catch (err) {
    return null;
  }
};
