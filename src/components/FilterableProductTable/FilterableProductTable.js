import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


const FilterableProductTable = (props) => {

    const { products } = props

    const [ productsState, setProductsState ] = useState({
        products,
        filteredProducts: [...products],
    })
    
    const [ searchWriteBar, setSearchWriteBar ] = useState(false)

    
    

    return (
        <div>
            <h1>IronStore</h1>
             <SearchBar 
             searchWriteBar={searchWriteBar} setSearchWriteBar={setSearchWriteBar}
             productsState={productsState} setProductsState={setProductsState}/>
             <ProductTable 
             searchWriteBar={searchWriteBar}
             productsState={productsState}/>
        </div>
        
    )
}
export default FilterableProductTable