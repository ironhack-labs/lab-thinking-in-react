import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (term) => {
    // filter based on search term
    const filteredProducts = jsonData.filter((product) => {
      return product.name.toLowerCase().includes(term.toLowerCase());
    });

    setProducts(filteredProducts);
  };


  return (
    <div>
      <h1>IronStore</h1>
      <div className="container">
        <SearchBar onSearch={handleSearch}/>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
