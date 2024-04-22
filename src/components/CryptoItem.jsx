function CryptoItem({ crypto, isFavorite, toggleFavorite }) {
  return (
    <li>
      <span>
        {crypto.name} ({crypto.symbol}) - {crypto.quote.USD.price}
      </span>
      <div className="love">
        <input
          id={`switch-${crypto.id}`}
          type="checkbox"
          checked={isFavorite}
          onChange={() => toggleFavorite(crypto.id)}
        />
        <label className="love-heart" htmlFor={`switch-${crypto.id}`}>
          <i className="left"></i>
          <i className="right"></i>
          <i className="bottom"></i>
          <div className="round"></div>
        </label>
      </div>
    </li>
  );
}

export default CryptoItem;
