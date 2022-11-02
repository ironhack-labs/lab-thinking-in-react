import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [productsToShow, setProductsToShow] = useState(jsonData);
  
  const filterProduct = (filterQuery) => {
    console.log(filterQuery)
     const filteredProduct = products.filter((eachProduct) => {
        console.log(eachProduct)
        return eachProduct.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
     })
     setProductsToShow(filteredProduct)
  }

  return(
      <div>
        <h1>IronStore</h1>
        <ProductTable productsToShow={productsToShow}/>
        <SearchBar filterProduct={filterProduct}/>
      </div>
  )
}

export default ProductsPage