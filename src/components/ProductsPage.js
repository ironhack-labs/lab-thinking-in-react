import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [keyword, setKeyword] = useState("")
  const [isInStock, setisInStock] = useState(false)

  const handleKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const handleCheckbox = (e) => {
    setisInStock(e.target.checked)
  }

  const keywordResults = products.filter(product => 
    product.name.toLowerCase().includes(keyword.toLowerCase())
  )

  const stockResults = keywordResults.filter(product => 
    isInStock ? product.inStock : true
  )

  return(
      <div>
        <h1>IronStore</h1>
        
        <SearchBar keyword={keyword} onChange={handleKeyword} />
        <div className="checkbox">
          <input type="checkbox" className="form-check-input" id="flexCheckDefault" 
            checked={products.inStock} 
            onChange={handleCheckbox}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Only show products in stock
          </label>
        </div>
        <ProductTable products={stockResults}/>

      </div>    
  )
}

export default ProductsPage;