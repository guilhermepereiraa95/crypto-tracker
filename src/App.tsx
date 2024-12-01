import CryptoList from './components/CryptoList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Crypto Tracker</h1>
        <CryptoList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
