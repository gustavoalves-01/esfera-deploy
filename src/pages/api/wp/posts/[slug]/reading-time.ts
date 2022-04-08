import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { TimeToReadInterface } from '../../../../../entities/Post';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<TimeToReadInterface | null>(async (resolve) => {
    try {
      const { slug } = req.query;

      const response = await axios.get(
        `https://esferaenergia.com.br/wp-json/wp/v2/posts/?slug=${slug}&_fields=id,content`
      );

      const { data } = response;

      const postContentRaw = data.content.rendered;
      const postContent = postContentRaw.replace(
        /<[^>]*>|\n|\r|\t|&\w{2,5};|<div[^>]+>|<\/div>/g,
        ''
      );

      const readingTime = Math.round(postContent.split(' ').length / 150);

      const postObj = {
        id: data.id,
        time: readingTime,
      };

      res.status(200).json(postObj);
      resolve(postObj);
    } catch (err) {
      res.status(500).json(err);
      return resolve(null);
    }
    res.status(405).end();
    return resolve(null);
  });
}
