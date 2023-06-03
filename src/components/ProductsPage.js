import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [allProduct] = useState(jsonData);
  
  const filterProducts = (search) => {
    const filterProduct = allProduct.filter((product) =>
      product.name.toUpperCase().includes(search.toUpperCase())
    );
    setProducts(filterProduct);
  };

  return(
      <div>
        <h1>IronStore</h1>
        < SearchBar filterProducts={filterProducts} />
        < ProductTable products={products} />
      </div>    
  )
}

export default ProductsPage;