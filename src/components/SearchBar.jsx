import React from 'react';

const SearchBar = ({ city, setCity, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      onSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button" onClick={onSearch}>
        <img src="/search.png" alt="search" />
      </button>
    </div>
  );
};

export default SearchBar;
