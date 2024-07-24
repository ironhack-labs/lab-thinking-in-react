import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import SortButton from './SortButton';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');

  const sortProducts = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    );
    setProducts(sortedProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortButton sortProducts={sortProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
