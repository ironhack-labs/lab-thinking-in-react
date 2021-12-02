import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


const FilterableProductTable = (props) => {

    const { products } = props

    const [ productsState, setProductsState ] = useState({
        products,
        filteredProducts: [...products],
    })

    return (
        <div>
            <h1>IronStore</h1>
             <SearchBar 
             productsState={productsState} setProductsState={setProductsState}/>
             <ProductTable 
             productsState={productsState}/>
        </div>
        
    )
}
export default FilterableProductTable