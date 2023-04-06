import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  console.log('products ', products)

  const productsSearch = (event) => {
    console.log('event ', event.target.value)

    if (event.target.value ==='') {
        setProducts([...jsonData])
        return products
    }

    const searchedProducts = [...products].filter(product => product.name.toUpperCase().startsWith(event.target.value.toUpperCase()))
    console.log('searchedProducts ', searchedProducts)
    setProducts(searchedProducts)
    return products
  }

    const showProductsInStock = (event) => {
        const productsInStock=[...products].filter(product => product.inStock)
        setProducts(productsInStock)
        return products
    }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar productsSearch={productsSearch} showProductsInStock={showProductsInStock}/>
        <ProductTable products={products} />
      </div>    
  )
}

export default ProductsPage