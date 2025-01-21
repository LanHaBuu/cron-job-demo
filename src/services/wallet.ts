import { API_KEY_BLOCK_VISION } from "@/config";
import axios from "axios";
import * as _ from 'lodash'

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
    const url = `https://api.blockvision.org/v2/sui/account/coins?account=${address}`;
    const response = await getApiKey(
      url,
      { accept: "*/*" },
      API_KEY_BLOCK_VISION
    );
    return response?.data?.result;
  } catch (e) {
    return null;
  }
};

const getActivityWallet = async (address: string, cursor: string = "") => {
  const url = cursor
    ? `https://api.blockvision.org/v2/sui/account/activities?address=${address}&cursor=${cursor}`
    : `https://api.blockvision.org/v2/sui/account/activities?address=${address}`;

  try {
    const response = await getApiKey(
      url,
      { accept: "*/*" },
      API_KEY_BLOCK_VISION
    );
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
  } catch (err: any) {
    return {
      data: [],
      nextPageCursor: null,
    };
  }
};

const getActivityWalletCreator = async (address:string) => {
  let cursor = "";
  let allData: any[] = [];

  try {
    while (cursor !== null) {
      const url = cursor
        ? `https://api.blockvision.org/v2/sui/account/activities?address=${address}&cursor=${cursor}`
        : `https://api.blockvision.org/v2/sui/account/activities?address=${address}`;

      const response = await getApiKey(
        url,
        { accept: "*/*" },
        API_KEY_BLOCK_VISION
      );

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

      allData = _.orderBy([...allData, ...res], ['timestamp'], ['asc']);
      cursor = nextPageCursor;
      if (!nextPageCursor) {
        break;
      }
    }
    return allData;
  } catch (err: any) {
    return [];
  }
};

const walletService = {
  getInfoWallet,
  getActivityWallet,
  getActivityWalletCreator
};
export default walletService;
