import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import Data from '../data.json';

function ProductPage() {
  const [products, setProducts] = useState(Data);
  const [search, setSearch] = useState('');
  const [inStock, setInStock] = useState(false);

  const onSearch = (value) => {
    setSearch(value);
  };

  const onStock = (val) => {
    setInStock(val);
  };

  const productsToShow = products
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    .filter((e) => inStock === false || e.inStock);

  return (
    <div className="container">
      <h1 className='text-center'>IronStore</h1>
      <SearchBar search={search} onSearch={onSearch} inStock={onStock} />
      <ProductTable products={productsToShow} />
    </div>
  );
}

export default ProductPage;
