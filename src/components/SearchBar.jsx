import React from 'react';

function SearchBar(props) {
  const { searchQuery, setSearchQuery, showInStockOnly, setShowInStockOnly } =
    props;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setShowInStockOnly(isChecked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
