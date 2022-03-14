import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PostPreview } from '../../../../entities/Posts';

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
    let params;
    if (query.recent) {
      params = {
        _fields: 'id,date,title,excerpt,slug,categories,tags',
        orderby: 'date',
        order: 'desc',
        per_page: itemsPerPage,
      };
    } else if (query.trending) {
      params = {
        _fields: 'id,date,title,excerpt,slug,categories,tags',
        orderby: 'date',
        order: 'desc',
        tags: 'trending',
        per_page: itemsPerPage,
      };
    } else if (query.most_accessed) {
      params = {
        _fields: 'id,date,title,excerpt,slug,categories,tags',
        orderby: 'date',
        order: 'desc',
        tags: 'most_accessed',
        per_page: itemsPerPage,
      };
    } else {
      params = {
        _fields: 'id,date,title,excerpt,slug,categories,tags',
        per_page: itemsPerPage,
        page: query.page ? query.page : '1',
      };
    }

    const response = await axios.get(
      `https://esferaenergia.com.br/wp-json/wp/v2/posts`,
      { params }
    );

    const postList: PostPreview[] = response.data;
    res.status(200).json(postList);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Erro ao listar preview dos posts' });
    }
  }
}
