import React from 'react';
import { SearchBar, ProductTable } from '../../molecules';

const FilterableProductTable = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default FilterableProductTable;