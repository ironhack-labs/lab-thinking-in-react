import { useState } from 'react';
import jsonData from '../data.json';
import SearchProducts from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (searchTerm) => {
      const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchProducts handleSearch={handleSearch}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;