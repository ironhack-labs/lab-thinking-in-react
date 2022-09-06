import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function filter() {
    const checkbox = document.querySelector("#checkbox").checked
    const searchbar = document.querySelector("#searchbar").value

    let filteredProducts = [ ...jsonData ].filter(product => product.name.toLowerCase().includes(searchBar.toLowerCase()))

    checkbox && (filteredProducts = filteredProducts.filter(product => product.inStock))
    
    setProducts(filteredProducts);  
}

  return (
    <div>
      <SearchBar filter={filter}/>
      <ProductTable products={products}/>
    </div>
  );
}

export default ProductsPage;
