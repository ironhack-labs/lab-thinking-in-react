const SearchBar = ({ searchProducts }) => {
  const searchProduct = (value) => {
    searchProducts(value);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          searchProduct(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
