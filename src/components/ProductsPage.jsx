import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    const handleSearch = (searchValue) => {
        if (searchValue === "") {
            setProducts(jsonData);
        } else {
      const filtered = products.filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()));
      setProducts(filtered)
    }
    } 

    const stockProducts = (e) => {
        if (e.target.checked === true) {
        const filtered = products.filter(elem => elem.inStock);
        setProducts(filtered);
        } else {
            setProducts(jsonData);
        }

    }
  
    return(
        <>
          <h1>IronStore</h1>
          <SearchBar onSearch={handleSearch}/>
          <p>Display only items in stock: <input type="checkbox" onChange={stockProducts}/></p>
          <table>
          <ProductTable products={products}/>
          </table>
          </>
    )
}


