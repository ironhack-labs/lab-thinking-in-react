import React, { useEffect, useState } from 'react';
import data from '../../data.json'
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

function FilterableProductTable() {

    const [products, setProducts] = useState([])
    //console.log (products)
    const [search, setSearch] = useState ('')

    useEffect(() => {
        let prods = data.data.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase()))
        setProducts(prods)
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div className="FilterableProductTable">
            <h1>IronStore</h1>
            <SearchBar value={search} onChange={handleSearch}/>
            <ProductTable products={products}/>
        </div>
    );
}

export default FilterableProductTable;