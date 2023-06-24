import React from "react";

import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        className="search-form__text"
        type="text"
        placeholder="Enter a city in the UK"
        onChange={handleInputChange}
        value={searchText}
      />
      <button className="search-form__button" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}
export default SearchForm;
