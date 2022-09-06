import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function search() {
    const checkbox = document.querySelector("#checkbox").checked
    const searchbar = document.querySelector("#searchbar").value

    // let filteredProducts = [ ...jsonData ].filter(product => product.name.toLowerCase().includes(searchbar.toLowerCase()))
    
    // checkbox && (filteredProducts = filteredProducts.filter(product => product.inStock))
    
    const copyProducts = [...jsonData]
    let filteredProducts = copyProducts.filter((el)=>{ return el.name.toLowerCase().includes(searchbar.toLowerCase())})
    checkbox && (filteredProducts=filteredProducts.filter((el)=>{return el.inStock}))
    setProducts(filteredProducts);  
}



  return (
    <div>
      <SearchBar key="1" search={search}/>
      <ProductTable id="productTable" key="2" products={products}/>
    </div>
  );
}

export default ProductsPage;
