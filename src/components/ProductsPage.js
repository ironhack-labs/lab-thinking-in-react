import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


function ProductsPage () {
    const [products, setProducts] = useState(jsonData);
    
    const filterByQuery = (query) => {
        let filteredProducts = jsonData.filter(product => {
            return product.name.toLowerCase().includes(query.toLowerCase()) 
        });

        setProducts([...filteredProducts]);
    }; 

    return(
        <div>
          <h1>IronStore</h1>
          <SearchBar onQueryChange={filterByQuery}/>
          <ProductTable products={products}/>
        </div>    
    )
  }

export default ProductsPage; 
