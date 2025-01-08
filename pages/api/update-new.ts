
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await axios.patch(`https://677ea6ca94bde1c1252ce5eb.mockapi.io/user/1`, {
        name:'cron job'
    }
    )
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(data.data);
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(400).send({});
  }
}
