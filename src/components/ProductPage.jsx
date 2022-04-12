import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [copiedProducts, setCopiedProducts] = useState(jsonData);

  function filterProducts(string){
    const filteredProducts = products.filter((product)=>{

        if(string === "") return true;
        else return product.name.toLowerCase().includes(string.toLowerCase());
      })
  
      setCopiedProducts(filteredProducts);
  }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={filterProducts}/>
        <ProductTable products={copiedProducts}/>
      </div>
  )
}

export default ProductsPage;