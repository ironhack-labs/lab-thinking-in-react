import { useState } from 'react';
import jsonData from '../data.json';
import '../index.css'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  
  const [products, setProducts] = useState(jsonData);
  const [productsData, setProductsData] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState('');
  const [inStock, setInStock] = useState(false);
  
  const searchItem = (query) => {
    setSearchQuery(query);
    const searchResult = productsData.filter(product => {
      const nameChars = product.name.toLowerCase().split('').sort();
      const queryChars = query.toLowerCase().split('').sort();
      return queryChars.every(char => nameChars.includes(char)) && (!inStock || product.inStock);
    });
    setProducts(searchResult);
  };
  
  const showOnlyInStock = (isChecked) => {
    setInStock(!isChecked);
    const inStockProducts = productsData.filter(product => product.inStock);
    const searchResult = isChecked ? inStockProducts : productsData;
    if (searchQuery !== '') {
      const nameFilteredResult = searchResult.filter(product => {
        const nameChars = product.name.toLowerCase().split('').sort();
        const queryChars = searchQuery.toLowerCase().split('').sort();
        return queryChars.every(char => nameChars.includes(char));
      });
      setProducts(nameFilteredResult);
    } else {
      setProducts(searchResult);
    }
  };
  

  return(
      <div className='productsPage'>
        <h1>IronStore</h1>
        <SearchBar searchItem={searchItem} showOnlyInStock={showOnlyInStock}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage