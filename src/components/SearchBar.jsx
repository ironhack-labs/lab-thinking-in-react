const SearchBar = ({ searchProducts, isStockProducts }) => {
  const searchProduct = (value) => {
    searchProducts(value);
  };

  const inStockProduct = (value) => {
    isStockProducts(value);
  };

  return (
    <div className="search-container">
      <h3>Search</h3>

      <div className="search-inputs">
        <div>
          <input
            type="text"
            onChange={(e) => {
              searchProduct(e.target.value);
            }}
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={(e) => {
              inStockProduct(e.target.checked);
            }}
          />
          <p>Only show products in stock</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
