import CryptoItem from "./CryptoItem";

function CryptoList({ cryptoData, toggleFavorite }) {
  return (
    <div className="crypto-list">
      <h2>Cryptomonnaies</h2>
      <ul>
        {cryptoData.map((crypto) => (
          <CryptoItem
            key={crypto.id}
            crypto={crypto}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
