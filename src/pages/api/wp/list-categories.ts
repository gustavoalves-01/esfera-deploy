import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { CategoryInterface } from '../../../entities/Category';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      'https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug'
    );

    const { data } = response;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching categories from Wordpress' });
  }
}
