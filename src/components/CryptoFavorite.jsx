
function CryptoFavorite({ favorites }) {
    return (
        <div className="crypto-favorite">
            <h2>Favoris</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <span>{favorite.name} ({favorite.symbol}) - {favorite.quote.USD.price}</span>
                        <div className="love">
                            <input type="checkbox" checked readOnly />
                            <label className="love-heart" htmlFor={`switch-${favorite.id}`}>
                                <i className="left"></i>
                                <i className="right"></i>
                                <i className="bottom"></i>
                                <div className="round"></div>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CryptoFavorite;