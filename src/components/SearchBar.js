function SearchBar(props) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = props.products.filter((element) => {
      return element.name.toLowerCase().includes(searchTerm);
    });

    props.setProducts(filteredProducts);
  };

  const filteredStock = () => {
    const inStockProducts = props.products.filter((element) => {
      return element.inStock === true;
    });
    props.setProducts(inStockProducts);
  };

  return (
    <div>
      <input type="text" placeholder="Search Product" onChange={handleSearch} />
      <label>
        <input
          type="checkbox"
          name="inStock"
          id="inStock"
          onChange={filteredStock}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
