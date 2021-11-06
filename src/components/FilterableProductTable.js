import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import ProductRow from './ProductRow';

function FilterableProductTable (props){
    return (
        <>
            <h1>IronStore</h1>
            <SearchBar productsList = {props.productsList}/>
            <ProductTable productsList = {props.productsList}/>
            {/* <ProductRow productsList = {props.productsList}/> */}
            {/* {console.log("productList", props.productsList )} */}
        </>
    )
}


export default FilterableProductTable;