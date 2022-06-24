import axios from 'axios';

export const api = axios.create({
  baseURL: `https://esferaenergia.com.br/wp-json/wp/v2`,
});
