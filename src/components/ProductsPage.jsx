import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [allProducts, setAllProducts] = useState(jsonData)

  const search = (e) => {
    const searchProduct = e.target.value
    if (!searchProduct) {
      setProducts(allProducts)
    } else {
      setProducts(products.filter((products) => products.name.includes(searchProduct)))
    }
  }

  return(
      <div>
        <h1>IronStore</h1>
        <div className="products">
        <SearchBar search={search}/>
        <ProductTable products={products}>
     
        </ProductTable>
        </div>
      </div>    
  )
}

export default ProductsPage;