import axios from 'axios';
import useSWR from 'swr';

export function useFetch(url: string | null) {
  const { data, error } = useSWR(url, async (url) => {
    const { data, headers } = await axios.get(url);
    return { data, headers };
  });

  return { data , isLoading: !error && !data, isError: error };
}
