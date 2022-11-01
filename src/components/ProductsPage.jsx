import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData); // Kann theoretisch weg
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

  const inStockSwitch = (event) => {
    setChecked(!event.target.checked);
    sortProducts();
  };

  return (
    <div>
      <SearchBar {...{ checked, inStockSwitch, handleSearch, searchInput }} />
      <ProductTable {...{ products, searchInput, inStockSwitch }} />
    </div>
  );
}
export default ProductsPage;
