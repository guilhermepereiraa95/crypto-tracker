import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCryptos = async (query: string = '', page: number = 1) => {
    const { data } = await api.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page,
        ...(query && { ids: query }),
      },
    });
    return data;
  };