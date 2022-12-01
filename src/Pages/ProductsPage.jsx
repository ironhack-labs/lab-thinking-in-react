import { useState } from 'react';
import ProductsList from '../components/Products/ProductList';
import SearchBar from '../components/SearchBar.jsx/SearchBar';
import jsonData from './../data.json';



function ProductsPage() {
    
    const [products, setProducts] = useState(jsonData);
    // const [myproduct, setMyProduct] = useState("")

    const handleProduct = text => {
        // console.log(text)    
        // setMyProduct(text)
        if (text.length > 0) {
            const productsCopy = [...products]
            const filteredProducts = productsCopy.filter(elem => elem.name.includes(text))
            setProducts(filteredProducts)
            }
    }
    

  return(
      <div>
          <h1>IronStore</h1>
          <hr />

          <SearchBar handleProduct={handleProduct} />
          <ProductsList products={products}/>
        

      </div>    
  )
}

export default ProductsPage