import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import Category from '../../../entities/Category';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const categoryListRes = await axios.get(
      'https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=name,slug'
    );

    const categoryList: Category[] = categoryListRes.data;

    res.status(200).json(categoryList);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching categories from Wordpress' });
  }
}
