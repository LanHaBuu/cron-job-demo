import caService from "@/services/ca";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const caAddress = req.query.address;
  try {
    const result = await caService.getCAAddress(caAddress as string)    
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({});
  }
}
