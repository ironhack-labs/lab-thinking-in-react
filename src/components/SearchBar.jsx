function SearchBar(props) {
  const { products, setProducts, fullList } = props;

  const filterProducts = (event) => {
    const inputString = event.target.value;
    // console.log(inputString);

    /* HERE IS A PROBLEM:

I can decide if I want to have both filters working at the same time 
and the input one not correctly, or to have only each one working correctly,
but not correctly at the same time.

Problem is which array I am using as a reference to filter in the filterProducts function.
fullList.filter = filterProducts alone works correctly
products.filter = filterProducts and checkbox work at the same time, but not filterProducts individually.
*/

    const filteredProducts = products.filter((product) => {
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
