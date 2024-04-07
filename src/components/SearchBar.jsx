const SearchBar = ({ products, setProducts }) => {
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setProducts(filteredProducts);
  };

  const handleInStock = (e) => {
    const isChecked = e.target.checked;
    const inStockProducts = products.filter((product) => product.inStock);
    setProducts(isChecked ? inStockProducts : products);
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" name="search" onChange={handleSearch} />
      <label htmlFor="inStock">Only show in stock products</label>
      <input type="checkbox" id="inStock" onChange={handleInStock} />
    </div>
  );
};

export default SearchBar;
