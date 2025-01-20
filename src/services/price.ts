import { ADDRESS_SUI, ADDRESS_SUI_AI } from "@/config";
import axios from "axios";
import * as _ from 'lodash'

const URL_DEXSCREENER = 'https://api.dexscreener.com/tokens/v1/sui'

const getPriceSuiDexscreener = async () => {
  try {
    const url = `${URL_DEXSCREENER}/${ADDRESS_SUI},${ADDRESS_SUI_AI}`;

    const response = await axios.get(url);
    const data = response?.data;
    return _.keyBy(
        data?.map((item:any) => ({
          address: item?.baseToken?.address,
          price: item?.priceUsd,
        })),
        'address'
      );
  } catch (e) {
    return null;
  }
};

const priceService = {
    getPriceSuiDexscreener,
};
export default priceService;
