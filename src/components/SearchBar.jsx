import { useState } from "react";

function SearchBar({ setSearchQuery }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        placeholder="Rechercher une cryptomonnaie..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
