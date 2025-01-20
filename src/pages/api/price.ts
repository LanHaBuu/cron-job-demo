
import priceService from "@/services/price";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await priceService.getPriceSuiDexscreener()
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({});
  }
}
