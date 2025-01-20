import chartService from "@/services/chart";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pool = req.query.pool;
  try {
    const result = await chartService.getChart(pool as string)
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send({});
  }
}
