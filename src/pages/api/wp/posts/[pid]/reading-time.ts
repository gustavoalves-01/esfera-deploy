import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface PostObjType {
  id: number;
  time: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<PostObjType | null>(async (resolve) => {
    try {
      const { pid } = req.query;

      const response = await axios.get(
        `https://esferaenergia.com.br/wp-json/wp/v2/posts/${pid}?_fields=id,content`
      );

      const { data } = response;

      const postContentRaw = data.content.rendered;
      const postContent = postContentRaw.replace(
        /<[^>]*>|\n|\r|\t|&\w{2,5};/g,
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
