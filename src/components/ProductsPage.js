import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function ProductsPage () {
  const [productsData, setProductsData] = useState(jsonData);
  const [products, setProducts] = useState(jsonData);  
  
  const searchProducts = (q) => {
    const newProductList = (q === '' ? productsData : productsData.filter(p=>p.name.toLowerCase().includes(q)))
    setProducts(newProductList);
  }

  const sortProducts = s => setProducts(productsData.filter(p=>(s ? (p.inStock === s) : p)));
  

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar search={searchProducts} sort={sortProducts} />        
        <ProductTable products={products} />
      </div>
  )
}

export default ProductsPage;