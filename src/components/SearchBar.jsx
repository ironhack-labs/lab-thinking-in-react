function SearchBar(props) {
  const { products, setProducts, fullList } = props;

  const filterProducts = (event) => {
    const inputString = event.target.value;
    // console.log(inputString);
    const filteredProducts = fullList.filter((product) => {
      return product.name.startsWith(inputString);
    });
    // console.log(filteredProducts);
    setProducts(filteredProducts);
  };

  const showInStock = (event) => {
    const isChecked = event.target.checked;
    // console.log(isChecked);
    if (isChecked) {
      const productsInStock = products.filter((product) => {
        return product.inStock;
      });
      setProducts(productsInStock);
    } else {
      setProducts(fullList);
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
        <input
          type="checkbox"
          name="checkBox"
          id="check-box"
          onChange={showInStock}
        />
        <label htmlFor="checkBox" id="check-box-label">
          {' '}
          only show products in stock
        </label>
      </div>
    </div>
  );
}
export default SearchBar;
