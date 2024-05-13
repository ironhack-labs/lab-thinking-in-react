function SearchBar({ searchWord, searchWordHandler, inStockOnly, handleInStockChange }) {
  return (
    <div>
      <label>
        Search <br />
        <input
          name="myInput"
          type="text"
          value={searchWord}
          // Triggered on every keystroke
          onChange={searchWordHandler}        
          
        />
      </label>
      <br />
      <label>
        Only show products in stock <input type="checkbox" name="myCheckbox" onChange={handleInStockChange} />
      </label>
    </div>
  );
}

export default SearchBar;
