import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PostPreviewInterface } from '../../../../entities/Post';
import handleCategory from '../../../../utils/handleCategories';
import { api } from '../../../../services/api';

interface RawPost {
  id: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
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
  try {
    const { query } = req;

    // Limitando parâmetros de tags
    if (query.recent && query.trending) {
      throw new Error(
        'Erro de parametros. Os paramentros recent e trending não podem ser passados em uma mesma chamada.'
      );
    } else if (query.recent && query.most_accessed) {
      throw new Error(
        'Erro de parametros. Os paramentros recent e most_accessed não podem ser passados em uma mesma chamada.'
      );
    } else if (query.most_accessed && query.trending) {
      throw new Error(
        'Erro de parametros. Os paramentros most_accessed e trnding não podem ser passados em uma mesma chamada.'
      );
    }

    // Coletando parâmetro de items por página
    const itemsPerPage = query.per_page ? query.per_page : '10';

    // Lidando com as chamadas API do WP
    const fields =
      'id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image';

    let params;

    if (query.recent) {
      params = {
        _fields: fields,
        orderby: 'date',
        order: 'desc',
        tags_exclude: ['3'],
        per_page: itemsPerPage,
      };
    } else if (query.trending) {
      params = {
        _fields: fields,
        orderby: 'date',
        order: 'desc',
        tags: '3',
        per_page: itemsPerPage,
      };
    } else if (query.most_accessed) {
      params = {
        _fields: fields,
        orderby: 'date',
        order: 'desc',
        tags: '0',
        tags_exclude: ['3'],
        per_page: itemsPerPage,
      };
    } else {
      params = {
        _fields: fields,
        per_page: itemsPerPage,
        page: query.page ? query.page : '1',
      };
    }

    if (query.onlyLinks) {
      params = {
        _fields: 'id, title, slug',
        per_page: '4',
        page: query.onlyLinks === 'expanded' ? '2' : '1',
      };
    }

    const response = await axios.get(
      `https://esferaenergia.com.br/wp-json/wp/v2/posts`,
      { params }
    );

    const { data } = response;

    const categories = await (await api.get('/list-categories')).data;

    const postList: PostPreviewInterface[] = data.map((post: RawPost) => {
      if (query.onlyLinks) {
        return {
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
        };
      } else {
        const excerptRegex = /<p>|<\/p>|(\[\&)(.*)(\;\])/g;
        const excerpt = post.excerpt.rendered.replace(excerptRegex, '');
        return {
          id: post.id,
          date: new Date(post.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }),
          title: post.title.rendered,
          excerpt: excerpt,
          slug: post.slug,
          categories: post.categories.map((item) => {
            return handleCategory(item, categories);
          }),
          tags: String(post.tags),
          imageURL: post.yoast_head_json.og_image[0].url,
        };
      }
    });
    res.status(200).json(postList);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Erro ao listar preview dos posts' });
    }
  }
}
