const SearchBar = ({ searchProducts, isStockProducts }) => {
  const searchProduct = (value) => {
    searchProducts(value);
  };

  const inStockProduct = (value) => {
    isStockProducts(value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          searchProduct(e.target.value);
        }}
      />
      <input
        type="checkbox"
        onChange={(e) => {
          inStockProduct(e.target.checked);
        }}
      />
      <p>Only show products in stock</p>
    </>
  );
};

export default SearchBar;
