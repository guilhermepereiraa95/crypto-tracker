type CryptoCardProps = {
    name: string;
    price: number;
    image: string;
    symbol: string;
  };
  
  const CryptoCard: React.FC<CryptoCardProps> = ({ name, price, image, symbol }) => {
    return (
      <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
        <img src={image} alt={name} className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{name} ({symbol.toUpperCase()})</h2>
          <p className="text-gray-600">${price.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default CryptoCard;
  