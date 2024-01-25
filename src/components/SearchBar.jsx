function SearchBar(props) {
  const { products, setProducts, fullList } = props;

  const filterProducts = (event) => {
    console.log(event.target.value);
    const inputString = event.target.value;
    const filteredProducts = products.filter((product) => {
      return product.name.startsWith(inputString);
    });
    console.log(filteredProducts);
    if (inputString === '') {
      setProducts(fullList);
    } else if (filteredProducts.length === 0) {
      setProducts([]);
    } else {
      setProducts(filteredProducts);
    }
  };

  return (
    <div id="search-bar-component">
      <label htmlFor="searchBar" id="search-bar-label">
        Search
      </label>
      <input
        type="text"
        name="searchBar"
        id="search-bar-input"
        onChange={filterProducts}
      />

      <div id="checkbox-container">
        <input type="checkbox" name="checkBox" id="check-box" />
        <label htmlFor="checkBox" id="check-box-label">
          {' '}
          only show products in stock
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
