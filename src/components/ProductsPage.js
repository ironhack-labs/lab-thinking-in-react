import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  const filterProducts = (input) => {
    const filtered = products.filter((product) => product.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    setProducts(filtered);
  }
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={filterProducts} />
        <ProductTable products={products} />
      </div>    
  )
}
export default ProductsPage;