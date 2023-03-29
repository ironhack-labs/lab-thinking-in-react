import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import jsonData from './../../data.json'

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  const onSearch = (value) => {
    setSearch(value);
  };

  const productsResult = products
  .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <SearchBar search={search} onSearch={onSearch}/>
      <ProductTable products={productsResult}/>
    </div>
  )
}

export default ProductsPage