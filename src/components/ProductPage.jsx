import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');
  return (
    <div>
      <h1>Product Page</h1>
      <SearchBar onSearch={setSearch} setProducts={ setProducts}/>
      <ProductTable products={products} search={search} />
    </div>
  );
}

export default ProductPage;
