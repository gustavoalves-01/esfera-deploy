import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { api } from '../../../../../services/api';
import handleCategory from '../../../../../utils/handleCategories';
import { FullPostInterface } from '../../../../../entities/Post';

interface RawPost {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  author: number;
  slug: string;
  categories: Array<number>;
  tags: Array<number>;
  yoast_head_json: {
    og_image: [
      {
        url: string;
      }
    ];
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise<FullPostInterface | null>(async (resolve) => {
    const handleContent = (content: string) => {
      const divsRemoved = content.replace(/<[\/]{0,1}(div)[^><]*>/g, '');
      const attrRemoved = divsRemoved.replace(/(?=class).*?>/g, '>');
      return attrRemoved;
    };

    try {
      const { slug } = req.query;

      const response = await axios.get(
        `https://esferaenergia.com.br/wp-json/wp/v2/posts?slug=${slug}`
      );

      const { data } = response;

      // console.log(JSON.parse(data[0].content.rendered));

      const categories = await (await api.get('/list-categories')).data;

      const fullPost: FullPostInterface = data.map((post: RawPost) => {
        return {
          id: post.id,
          title: post.title.rendered,
          author: post.author,
          // author: handleAuthor(post.author, authors)
          categories: post.categories.map((item) => {
            return handleCategory(item, categories);
          }),
          content: handleContent(post.content.rendered),
          imageURL: post.yoast_head_json.og_image[0].url,
          createdAt: post.date,
        };
      })[0];
      res.status(200).json(fullPost);
      resolve(fullPost);
    } catch (err) {
      res.status(500).json(err);
      return resolve(null);
    }
    res.status(405).end();
    return resolve(null);
  });
}
