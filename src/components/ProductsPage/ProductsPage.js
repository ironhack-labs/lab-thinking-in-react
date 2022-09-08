import { useState } from 'react';
import jsonData from './ProductsPage';
import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';

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
