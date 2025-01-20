import { API_KEY_BLOCK_VISION, API_KEY_BLOCKBERRY } from "@/config";
import axios from "axios";

const getApiKey = async (url: string, headers: any, apiKeys: string[]) => {
  let nextKeyIndex = 0;

  while (nextKeyIndex < apiKeys.length) {
    try {
      const response = await axios.get(url, {
        headers: {
          ...headers,
          "x-api-key": apiKeys[nextKeyIndex],
        },
      });
      return response; 
    } catch (err: any) {
      if (err.response?.status !== 403) {
        throw err; 
      }
      nextKeyIndex++; 
    }
  }
  throw new Error("All API keys failed");
};

const getInfoWallet = async (address: string) => {
  try {
    const urlBerry = `https://api.blockberry.one/sui/v1/accounts/${address}/balance`;
    const responseBerry = await axios.get(urlBerry, {
      headers: {
        accept: "*/*",
        "x-api-key": API_KEY_BLOCKBERRY[0],
      },
    });
    const dataBerry = responseBerry?.data;

    const urlVision = `https://api.blockvision.org/v2/sui/account/coins?account=${address}`;
    const responseVision = await getApiKey(urlVision, { accept: "*/*" }, API_KEY_BLOCK_VISION);
    const dataVision = responseVision?.data?.result;

    const totalUsdValue = dataVision.usdValue;

    const mergedData = dataBerry.map((berry: any) => {
      const matchingVision = dataVision.coins.find(
        (vision: any) => vision.symbol === berry.coinSymbol
      );
      return {
        ...berry,
        logo: matchingVision?.logo ?? null,
        verified: matchingVision?.verified ?? null,
      };
    });

    return {
      data: mergedData,
      totalUsdValue,
    };
  } catch (e) {
    return null;
  }
};

const getActivityWallet = async (address: string, cursor: string = "") => {
  const url = cursor
    ? `https://api.blockvision.org/v2/sui/account/activities?address=${address}&cursor=${cursor}`
    : `https://api.blockvision.org/v2/sui/account/activities?address=${address}`;

  try {
    const response = await getApiKey(url, { accept: "*/*" }, API_KEY_BLOCK_VISION); 
    const nextPageCursor = response?.data?.result?.nextPageCursor;

    const res = response?.data?.result?.data?.map((item: any) => ({
      transaction: item?.digest,
      coinChanges: item?.coinChanges,
      sender: item?.sender,
      timestamp: item?.timestampMs,
      type: item?.type,
      interactAddresses: item?.interactAddresses,
      gasFee: item?.gasFee,
    }));

    
    

    return {
      data: res,
      nextPageCursor,
    };
  } catch (err:any) {
    return {
      data: [],
      nextPageCursor: null,
    };
  }
};


const walletService = {
  getInfoWallet,
  getActivityWallet
};
export default walletService;
