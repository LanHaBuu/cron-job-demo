
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

let currentId = 3;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${currentId}`)
    currentId = currentId >= 20 ? 1 : currentId + 1;
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(data.data);
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(400).send({});
  }
}
