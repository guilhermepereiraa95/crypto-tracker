import { useQuery } from 'react-query';
import { getCryptos } from '../services/api';

export const useCryptos = (query: string, page: number) => {
  return useQuery(['cryptos', query, page], () => getCryptos(query, page), {
    staleTime: 1000 * 60,
    keepPreviousData: true,
  });
};
