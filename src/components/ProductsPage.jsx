import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage() {
  const [ products, setProducts ] = useState(jsonData)
  const [filteredFoodArray, setFilteredFoodArray] = useState(jsonData)

  const filterProductList = (searchString) => {
    const filteredProducts = products.filter(Element => {
      return Element.name.toLowerCase().includes(searchString.toLowerCase());
    });

    setFilteredFoodArray(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={filterProductList} />
      {console.log(products)}
      <ProductTable products={filteredFoodArray}/>
    </div>
  
  )

}


export default ProductsPage;