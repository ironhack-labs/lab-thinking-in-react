import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);
  const [filteredProductsAll, setFilteredProductsAll] = useState(jsonData);

  const refreshFilteredProducts = searchText => {
    if (searchText === "") {
      setFilteredProducts(products)
    }
    else {
      const filteredProducts = products.filter(product => product.name.toUpperCase().includes(searchText.toUpperCase()))
      setFilteredProducts(filteredProducts)
    }
  }

  const toggleProductsInStock = inStock => {  
    setFilteredProductsAll(filteredProducts);  
    if (inStock === false) {
      const productsInStock=filteredProducts.filter(product => product.inStock)
      setFilteredProducts(productsInStock)
      console.log('from Toggle in Stock: ', productsInStock)
    } else {
      setFilteredProducts(filteredProductsAll)
      console.log('from Toggle all: ', filteredProductsAll)
    }

  }
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar refreshFilteredProducts={refreshFilteredProducts} toggleProductsInStock={toggleProductsInStock}/>
        <ProductTable products={filteredProducts} />
      </div>    
  )
}

export default ProductsPage