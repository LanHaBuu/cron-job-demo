import walletService from "@/services/wallet";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = req.query.address;
  try {
    const result = await walletService.getInfoWallet(address as string) 
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({});
  }
}
