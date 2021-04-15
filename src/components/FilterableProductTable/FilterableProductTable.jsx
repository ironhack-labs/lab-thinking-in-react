import React, { useEffect, useState } from 'react';
import data from '../../data.json'
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

function FilterableProductTable() {

    const [products, setProducts] = useState([])
    //console.log (products)
    const [search, setSearch] = useState('')
    const [check, setCheck] = useState(false)

    useEffect(() => {
        let prods = data.data.filter(prod => prod.name.toLowerCase().includes(search.toLowerCase()))
        setProducts(prods)
    }, [search])

    useEffect(() => {
        let prodsStock = data.data.filter(prod => prod.stocked === true)
        //let prodsNoStock = data.data.filter(prod => prod.stocked === false)
        if (check) {
            setProducts(prodsStock) 
        } else {
            setProducts(data.data) 
        }
    }, [check])

    const handleCheck = (e) => {
        setCheck(e.target.checked)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div className="FilterableProductTable">
            <h1>IronStore</h1>
            <SearchBar valueSearch={search} onChange={handleSearch} valueCheck={check} onChecked={handleCheck}/>
            <ProductTable products={products}/>
        </div>
    );
}

export default FilterableProductTable;