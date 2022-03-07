import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const wpRes = await axios.get('https://esferaenergia.com.br/wp-json/');
  const wp = wpRes.data;

  res.status(200).json(wp);
  
}
