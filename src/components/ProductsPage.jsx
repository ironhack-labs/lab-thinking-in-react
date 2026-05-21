import React from 'react'
import {useState} from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx'


export default function ProductsPage() {
    const [searchQuery , setSearchQuery] = useState('pizza');
    const [products, setProducts] = useState(jsonData);
    const [onlyInStock, setOnlyInStock] = useState(false); 

    const filteredProducts = products
    .filter(product=> product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(product=>onlyInStock ? product.inStock === true : true);
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} onlyInStock={onlyInStock} onStockFilter={setOnlyInStock}/>
        <ProductTable products = {filteredProducts}/>
    </div>
  )
}
