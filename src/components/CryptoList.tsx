import { useState } from 'react';
import { useCryptos } from '../hooks/useCrypto';
import CryptoCard from './CryptoCard';
import { useDebounce } from 'use-debounce';

const CryptoList: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedQuery] = useDebounce(searchInput.toLowerCase(), 500);
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching } = useCryptos(debouncedQuery, page);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setPage(1);
  };

  if (isLoading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">Erro ao carregar dados.</p>;

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar criptomoeda..."
          className="w-full p-2 border rounded-md"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

      {isFetching && <p className="text-center">Atualizando dados...</p>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.length > 0 ? (
          data.map((crypto: any) => (
            <CryptoCard
              key={crypto.id}
              name={crypto.name}
              price={crypto.current_price}
              image={crypto.image}
              symbol={crypto.symbol}
            />
          ))
        ) : (
          <p className="text-center col-span-full">Nenhuma criptomoeda encontrada.</p>
        )}
      </div>

      <div className="flex justify-evenly items-center mt-6 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600 transition"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 hover:bg-blue-600 transition"
          onClick={() => setPage((prev) => prev + 1)}   
          disabled={data?.length < 10}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default CryptoList;