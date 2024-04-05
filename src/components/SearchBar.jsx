
import React from 'react';
import styles from './ProductsPage.module.css'; // Make sure the path to your CSS module is correct

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
  return (
    <div className={styles.searchBar}> {/* Apply the searchBar class */}
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        className={styles.searchInput} // Apply a class for styling
      />
      <label className={styles.stockCheckbox}> {/* Apply a class for styling */}
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;