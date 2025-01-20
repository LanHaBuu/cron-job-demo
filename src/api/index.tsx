
import { apiEndpoints } from "@/config";
import axios from "axios";

export const getCAInfo = async (caAddress: string) => {
  try {
    if (caAddress) {
      const url = `${apiEndpoints.nextApi}/ca-info/${caAddress}`;
      const res = await axios.get(url);
      return res?.data;
    }
    return null;
  } catch (err) {
    throw err
  }
};


export const getPrice = async () => {
  try {
    const url = `${apiEndpoints.nextApi}/price`;
    const res = await axios.get(url);
    return res?.data;
  } catch (err) {
    throw err
  }
};