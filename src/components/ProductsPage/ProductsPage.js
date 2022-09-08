import { useState } from 'react';
import jsonData from '../../data.json';
import productsJSON from '../../data.json';
import ProductTable from './ProductTable/ProductTable';



function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState(false);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar
        search={search}
        setSearch={setSearch}
        stock={stock}
        setStock={setStock}
        />
        <ProductTable products={products} search={search} stock={stock} />
    </div>
  );
}

export default ProductsPage;
