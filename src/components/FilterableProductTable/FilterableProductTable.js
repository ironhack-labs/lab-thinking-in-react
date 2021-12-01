import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';


const FilterableProductTable = (props) => {

    const { products } = props

    return (
        <div>
            <h1>IronStore</h1>
             <SearchBar />
             <ProductTable products={products}/>
        </div>
        
    )
}
export default FilterableProductTable