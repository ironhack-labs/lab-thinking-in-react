import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const filterProduct = (wordToSearch) => {
    setProducts(
      jsonData.filter((product) => {
        product.name.includes('wordToSearch');
      })
    );
  };

  return (
    <div className='container'>
      <h1>IronStore</h1>
      <SearchBar filterProduct={filterProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
