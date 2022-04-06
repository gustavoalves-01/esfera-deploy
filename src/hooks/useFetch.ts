import axios from 'axios';
import useSWR from 'swr';

export function useFetch(url: string | null) {
  const { data, error } = useSWR(url, async (url) => {
    const { data } = await axios.get(url);
    return data;
  });

  return { data, isLoading: !error && !data, isError: error };
}
