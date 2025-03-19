import React, { useState } from 'react'
import ProductRow from './ProductRow'
import productData from '../data.json'
import SearchBar from './SearchBar'

function ProductTable() {
    const [products, setProducts] = useState(productData)
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);

    const handleSearchProduct = (name) => {
      setProducts(products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
    }
    
    const handleStockChange = (inStock) => {
      setShowOnlyInStock(inStock);
      if (inStock) {
        setProducts(productData.filter((product) => product.inStock));
      } else {}
        setProducts(productData);
      }
 

  return (
    <>
    <section>
    <SearchBar onSearch={handleSearchProduct} onStockChange={handleStockChange}/>
    </section>
    <section>
    <table >
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        
        <tbody>
            {products.map(product => 
            <ProductRow  key={product.id} product={product}/>
            )} 
        </tbody>
        
    </table>


    </section>
    </>
  )
}

export default ProductTable