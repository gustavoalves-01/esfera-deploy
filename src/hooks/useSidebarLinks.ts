import axios from 'axios';
import useSWR from 'swr';

export function useSidebarLinks(page: number, type: string) {
  const { data, error } = useSWR(
    type,
    async () => {
      const { data, status } = await axios.get(type, {
        params: {
          onlyLinks: page === 1 ? 'true' : 'expanded',
        },
      });

      return data;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    }
  );
  return { data, isLoading: !error && !data, isError: error };
}
