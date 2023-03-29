import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [inStock, setInStock] = useState(false);

  const onSearch = (value) => {
    setSearch(value);
  };

  const byStock = (value) => {
    setInStock(value);
  };
  
  const productsFilter = products
  .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
  .filter((e) => inStock === false || e.inStock);

  return (
    <div>
      <SearchBar search={search} onSearch={onSearch} inStock={byStock} />
      <ProductTable products={productsFilter}/>
    </div>
  )
}

export default ProductsPage