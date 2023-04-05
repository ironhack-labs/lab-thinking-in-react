import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [keyword, setKeyword] = useState("")

  const keywordChange = (e) => {
    setKeyword(e.target.value)
  }

  const results = products.filter(product => 
    product.name.toLowerCase().includes(keyword.toLowerCase())
  )

  return(
      <div>
        <h1>IronStore</h1>
        
        <SearchBar keyword={keyword} onChange={keywordChange} />
        <div className="checkbox">
          <input type="checkbox" className="form-check-input" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Only show products in stock
          </label>
        </div>
        <ProductTable products={results}/>

      </div>    
  )
}

export default ProductsPage;