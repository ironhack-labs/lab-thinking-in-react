import React from 'react';
import Row from './ProductRow';
import Search from './SearchBar';

export const Products = () => {
    return(
        <div>
            <Search/>
            <Row/>
        </div>
    )

}

export default Products;