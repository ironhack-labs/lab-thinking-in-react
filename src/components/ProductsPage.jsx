import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [checked, setChecked] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  // Filter by inStockSwitch
  const productsWithStock = products.filter((product) => {
    return product.inStock === true;
  });

  const sortProducts = () => {
    checked ? setProducts(productsWithStock) : setProducts(jsonData);
  };

  const productsInStockSwitch = (event) => {
    setChecked(!event.target.checked);
    sortProducts();
  };

  return (
    <div>
      <SearchBar
        checked={checked}
        productsInStockSwitch={productsInStockSwitch}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />
      <ProductTable products={products} searchInput={searchInput} />
    </div>
  );
}
export default ProductsPage;
