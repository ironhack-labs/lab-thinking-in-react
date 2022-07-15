import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';


export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData); 
    const [query, setQuery] = useState(''); 
    const [checked, setCheck] = useState(false); 

    const filteredProducts = products.filter(product => { 
        if (checked && !product.inStock) { return false }
        return product.name.toLowerCase().includes(query.toLowerCase()) ? true : false
    }); 

    return(
        <div> 
            <h1>IronStore</h1> 
            <SearchBar setQueryProp={setQuery} setCheckedProp={setCheck}/>
            <ProductTable filtered = {filteredProducts} /> 
        </div>    
    ); 
}

